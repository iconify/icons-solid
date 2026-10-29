import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cye0ujb8y.css';
import '../../css/g/g-ap9-bjz.css';
import '../../css/j/ji7s5kkan.css';
import '../../css/y/ymyikzbao.css';
import '../../css/m/mgvelsblc.css';
import '../../css/j/jr3_dwbxj.css';
import '../../css/e/eqb8hoams.css';
import '../../css/u/ufueqvbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cye0ujb8y wm-k"/><path class="g-ap9-bjz wm-k"/><path class="ji7s5kkan wm-k"/><path class="wm-shine ymyikzbao"/><path class="mgvelsblc wm-a"/><path class="jr3_dwbxj wm-a"/><path class="eqb8hoams wm-a"/><path class="ufueqvbhq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:anchor"} {...others} />);
}

export default Component;
