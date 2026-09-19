import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-9_rj_3o.css';
import '../../css/m/mmz906u-j.css';
import '../../css/d/dedmydhnx.css';
import '../../css/h/hsm38cqxa.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="c-9_rj_3o"/><path class="mmz906u-j"/><path class="dedmydhnx"/><path class="hsm38cqxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pg"} {...others} />);
}

export default Component;
