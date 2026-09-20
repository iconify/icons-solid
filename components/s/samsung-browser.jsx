import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnikkmjuh.css';
import '../../css/x/x7vysrk2l.css';
import '../../css/q/qh9nnibxp.css';
import '../../css/d/ddytleb_x.css';

const viewBox = {"width":493,"height":493};
const content = `<path class="lnikkmjuh"/><path class="x7vysrk2l"/><path class="qh9nnibxp"/><path class="ddytleb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:samsung-browser"} {...others} />);
}

export default Component;
