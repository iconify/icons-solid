import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmqw3acnn.css';
import '../../css/q/qckjszm3s.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/c/c_--icb5w.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVGvlA40cbZ" class="fmqw3acnn"/><path id="SVGEqUC3bUN" class="qckjszm3s"/></defs><g class="ft5dv1b6b"><path class="yvd61yb8z"/><use href="#SVGvlA40cbZ" class="c-zrgpb5l"/><use href="#SVGEqUC3bUN" class="c-zrgpb5l"/><path class="c_--icb5w"/><use href="#SVGvlA40cbZ" class="c-zrgpb5l"/><use href="#SVGEqUC3bUN" class="c-zrgpb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:earth-1"} {...others} />);
}

export default Component;
