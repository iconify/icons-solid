import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g271g3tax.css';
import '../../css/l/l6fc-_mup.css';
import '../../css/s/spg89f-kh.css';
import '../../css/a/a9qq5obmi.css';
import '../../css/o/onf2o-04e.css';
import '../../css/g/ghi5_wb7c.css';
import '../../css/q/qow0sabwa.css';
import '../../css/b/bzz63mbuk.css';
import '../../css/l/l6v81ebtl.css';
import '../../css/k/kq4zr17pd.css';
import '../../css/t/tzrqxpbtp.css';
import '../../css/g/gh62wjbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g271g3tax"/><path class="l6fc-_mup"/><path class="spg89f-kh"/><path class="a9qq5obmi"/><path class="onf2o-04e"/><path class="ghi5_wb7c"/><path class="qow0sabwa"/><path class="bzz63mbuk"/><path class="l6v81ebtl"/><path class="kq4zr17pd"/><path class="tzrqxpbtp"/><path class="gh62wjbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:keyboard-line-duotone"} {...others} />);
}

export default Component;
