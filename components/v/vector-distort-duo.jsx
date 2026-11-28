import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_dq2rlup.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kou4h8bos.css';
import '../../css/e/eju48va4o.css';
import '../../css/b/b__phm-2b.css';
import '../../css/v/v82xbubiw.css';
import '../../css/r/rjjnf1bkc.css';
import '../../css/i/ifvg-rbus.css';
import '../../css/t/tim7h1b2p.css';
import '../../css/z/zrrlt37op.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary u_dq2rlup"/><g class="dt0cm9dhy primary"><path class="kou4h8bos"/><path class="eju48va4o"/><path class="b__phm-2b"/><path class="v82xbubiw"/><path class="rjjnf1bkc"/><path class="ifvg-rbus"/><path class="tim7h1b2p"/><path class="zrrlt37op"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vector-distort-duo"} {...others} />);
}

export default Component;
