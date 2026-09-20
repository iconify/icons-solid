import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyfg_cccn.css';
import '../../css/j/j_9xat6sj.css';
import '../../css/j/jrhkl8b8h.css';
import '../../css/j/jzggfvzxz.css';
import '../../css/z/z8sew1bgb.css';

const viewBox = {"width":390.02,"height":131.12};
const content = `<path class="kyfg_cccn"/><path class="j_9xat6sj"/><path class="jrhkl8b8h"/><path class="jzggfvzxz"/><path class="z8sew1bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vidiq"} {...others} />);
}

export default Component;
