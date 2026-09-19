import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjqhxab0j.css';
import '../../css/v/vr04v14eo.css';
import '../../css/g/gootj1b_k.css';
import '../../css/r/rrk2cbc3a.css';
import '../../css/t/tp4is0bfc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wjqhxab0j"/><path class="vr04v14eo"/><rect class="gootj1b_k"/><path class="rrk2cbc3a"/><path class="tp4is0bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sound-one"} {...others} />);
}

export default Component;
