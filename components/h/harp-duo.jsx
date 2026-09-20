import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cz1afleut.css';
import '../../css/t/tpckh-bqn.css';
import '../../css/f/fqikxiltt.css';
import '../../css/g/gmzx9rbqs.css';
import '../../css/c/cdqo77b0m.css';
import '../../css/s/st-3vni6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cz1afleut"/><path class="tpckh-bqn"/><path class="fqikxiltt"/><path class="gmzx9rbqs"/><path class="cdqo77b0m"/><path class="st-3vni6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:harp-duo"} {...others} />);
}

export default Component;
