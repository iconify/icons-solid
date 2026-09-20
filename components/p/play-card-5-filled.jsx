import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kinrn02eb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kinrn02eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-5-filled"} {...others} />);
}

export default Component;
