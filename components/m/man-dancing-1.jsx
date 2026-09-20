import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uovx574fu.css';
import '../../css/z/z_p7_rbpw.css';
import '../../css/q/q_ofj8bpx.css';
import '../../css/q/qkk5e_94p.css';
import '../../css/m/mrwe6jbac.css';
import '../../css/m/my5_-ab6h.css';
import '../../css/m/m07299bvs.css';
import '../../css/m/m5nb45sse.css';
import '../../css/i/ir736-b5n.css';
import '../../css/m/m0umjrrfh.css';
import '../../css/n/ndacgyb-x.css';
import '../../css/u/ukbj9-z2l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uovx574fu"/><path class="z_p7_rbpw"/><path class="q_ofj8bpx"/><path class="qkk5e_94p"/><path class="mrwe6jbac"/><path class="my5_-ab6h"/><path class="m07299bvs"/><path class="m5nb45sse"/><path class="ir736-b5n"/><path class="m0umjrrfh"/><path class="ndacgyb-x"/><path class="ukbj9-z2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-dancing-1"} {...others} />);
}

export default Component;
