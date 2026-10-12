import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klnzit2vx.css';
import '../../css/f/fe7o34b3t.css';
import '../../css/r/r0o81_6ow.css';
import '../../css/c/c988y9bgl.css';
import '../../css/o/o_j0mtbbb.css';
import '../../css/j/jx2cbrb-y.css';
import '../../css/g/gxybu9b-o.css';
import '../../css/k/ktazakktk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="klnzit2vx"/><rect class="fe7o34b3t"/><rect class="r0o81_6ow"/><rect class="c988y9bgl"/><rect class="o_j0mtbbb"/><rect class="jx2cbrb-y"/><rect class="gxybu9b-o"/><rect class="ktazakktk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:blocks"} {...others} />);
}

export default Component;
