import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/s/stcb2impd.css';
import '../../css/m/mc9tdrbyu.css';
import '../../css/i/inhrcdb8s.css';
import '../../css/b/bhomyob2f.css';
import '../../css/c/cv5du5lyj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="stcb2impd"/><path class="mc9tdrbyu"/><path class="inhrcdb8s"/><path class="bhomyob2f"/><path class="cv5du5lyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pounds-coin"} {...others} />);
}

export default Component;
