import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdshv-w4n.css';
import '../../css/j/j-cb_fbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdshv-w4n"/><path class="j-cb_fbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flip-vertical-down-bold"} {...others} />);
}

export default Component;
