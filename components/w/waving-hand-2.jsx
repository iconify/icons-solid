import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyl23qbli.css';
import '../../css/u/uy_2stbfh.css';
import '../../css/k/k2l5gbcnd.css';
import '../../css/o/o1615ib4d.css';
import '../../css/b/b0xi1bjln.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyl23qbli"/><path class="uy_2stbfh"/><path class="k2l5gbcnd"/><path class="o1615ib4d"/><path class="b0xi1bjln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:waving-hand-2"} {...others} />);
}

export default Component;
