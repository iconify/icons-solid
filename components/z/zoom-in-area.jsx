import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvrr3kbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvrr3kbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zoom-in-area"} {...others} />);
}

export default Component;
