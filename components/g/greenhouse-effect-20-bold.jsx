import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1z2bma3g.css';
import '../../css/q/qhpa06bqs.css';
import '../../css/s/sksczibjq.css';
import '../../css/z/z1omxobhi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a1z2bma3g"/><path class="qhpa06bqs"/><path class="sksczibjq"/><path class="z1omxobhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-effect-20-bold"} {...others} />);
}

export default Component;
