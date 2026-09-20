import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4zprc1uw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4zprc1uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-letter-x-filled"} {...others} />);
}

export default Component;
