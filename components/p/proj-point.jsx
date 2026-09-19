import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoccat2cq.css';
import '../../css/e/ev59uebdl.css';
import '../../css/i/imf56g2tr.css';
import '../../css/d/dy2dcuksu.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="uoccat2cq"/><circle class="ev59uebdl"/><path class="imf56g2tr"/><path class="dy2dcuksu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:proj-point"} {...others} />);
}

export default Component;
