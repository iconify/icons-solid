import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3qc_db2n.css';
import '../../css/s/sutgbdv0l.css';
import '../../css/x/x2ck18sgx.css';
import '../../css/f/fjmjfbq2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z3qc_db2n"/><path class="sutgbdv0l"/><path class="x2ck18sgx"/><path class="fjmjfbq2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drone"} {...others} />);
}

export default Component;
