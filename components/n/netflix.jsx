import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1tev6ybj.css';
import '../../css/n/nqec1c1ia.css';
import '../../css/k/kte34l_7e.css';
import '../../css/c/cvhw_bdua.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g1tev6ybj"/><path class="nqec1c1ia"/><path class="kte34l_7e"/><path class="cvhw_bdua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:netflix"} {...others} />);
}

export default Component;
