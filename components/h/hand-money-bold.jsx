import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hig03zb4r.css';
import '../../css/g/g0dn0ibjz.css';
import '../../css/s/slpchx0bj.css';
import '../../css/u/uw4yw0awk.css';
import '../../css/t/t74sydbxp.css';
import '../../css/c/cglbq3bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hig03zb4r"/><path clip-rule="evenodd" class="g0dn0ibjz"/><path class="slpchx0bj"/><path class="uw4yw0awk"/><path class="t74sydbxp"/><path class="cglbq3bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-bold"} {...others} />);
}

export default Component;
