import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cp8usnbhx.css';
import '../../css/p/pfa5-ccck.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/b/bvi2--lni.css';
import '../../css/l/l77qzgmuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cp8usnbhx"/><path class="pfa5-ccck"/><circle class="z2o0ujiuj"/><path class="bvi2--lni"/><path class="l77qzgmuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-mario-toad"} {...others} />);
}

export default Component;
