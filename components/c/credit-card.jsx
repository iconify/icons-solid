import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9a2o1loy.css';
import '../../css/p/pjorz5nfj.css';
import '../../css/x/x_g16obgs.css';
import '../../css/b/bfadvpggb.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/f/f8w2mshgo.css';
import '../../css/c/c_n8-fb9x.css';
import '../../css/h/h3yv8cktf.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h9a2o1loy"><path class="pjorz5nfj"/><path class="x_g16obgs"/><path class="bfadvpggb"/></g><g class="x8poo_bjf"><path class="f8w2mshgo"/><path class="c_n8-fb9x"/><path class="h3yv8cktf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:credit-card"} {...others} />);
}

export default Component;
