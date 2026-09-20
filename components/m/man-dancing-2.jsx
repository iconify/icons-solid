import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p928ljbib.css';
import '../../css/z/z_p7_rbpw.css';
import '../../css/q/q_ofj8bpx.css';
import '../../css/q/qkk5e_94p.css';
import '../../css/p/phlycoujj.css';
import '../../css/m/my5_-ab6h.css';
import '../../css/m/m07299bvs.css';
import '../../css/w/wkqqc1bch.css';
import '../../css/i/ir736-b5n.css';
import '../../css/x/xlgkg9fut.css';
import '../../css/p/p_u9-ob-s.css';
import '../../css/u/ukbj9-z2l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p928ljbib"/><path class="z_p7_rbpw"/><path class="q_ofj8bpx"/><path class="qkk5e_94p"/><path class="phlycoujj"/><path class="my5_-ab6h"/><path class="m07299bvs"/><path class="wkqqc1bch"/><path class="ir736-b5n"/><path class="xlgkg9fut"/><path class="p_u9-ob-s"/><path class="ukbj9-z2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-dancing-2"} {...others} />);
}

export default Component;
