import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6sb2hngk.css';
import '../../css/n/nnm25rbzu.css';
import '../../css/d/drgos1k9n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6sb2hngk"/><path class="nnm25rbzu"/><path class="drgos1k9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webcam-20"} {...others} />);
}

export default Component;
