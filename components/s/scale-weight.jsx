import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/f/f2hc60b4d.css';
import '../../css/b/bty0mx9ti.css';
import '../../css/j/jzcuj-bmh.css';
import '../../css/k/ko-a2umbf.css';
import '../../css/n/nrlsiivie.css';
import '../../css/z/zmiqmvbph.css';
import '../../css/m/m9gh8obpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="f2hc60b4d"/><path class="bty0mx9ti"/><path class="jzcuj-bmh"/><path class="ko-a2umbf"/><path class="nrlsiivie"/><path class="zmiqmvbph"/><path class="m9gh8obpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:scale-weight"} {...others} />);
}

export default Component;
