import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/horse9bye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="horse9bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:book-filled"} {...others} />);
}

export default Component;
