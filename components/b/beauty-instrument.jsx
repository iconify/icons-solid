import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jqduq2nau.css';
import '../../css/k/k8_24nbcn.css';
import '../../css/x/xez_eqbcg.css';
import '../../css/n/njnrc3ksm.css';
import '../../css/z/zn7mzwbpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="jqduq2nau"/><path class="k8_24nbcn"/><rect class="xez_eqbcg"/><path class="njnrc3ksm"/><path class="zn7mzwbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:beauty-instrument"} {...others} />);
}

export default Component;
