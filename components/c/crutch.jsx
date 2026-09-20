import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-aeptbmb.css';
import '../../css/b/bw5jyhiyf.css';
import '../../css/p/prgqsmbhl.css';
import '../../css/m/mltw092_g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k-aeptbmb"/><path class="bw5jyhiyf"/><path class="prgqsmbhl"/><path class="mltw092_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:crutch"} {...others} />);
}

export default Component;
