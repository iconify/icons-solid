import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7_e5xbbg.css';
import '../../css/l/lke8sfb2b.css';
import '../../css/h/hya45hbax.css';
import '../../css/q/qqi_ahbwa.css';
import '../../css/c/cnou19b4m.css';
import '../../css/y/y1cvh44tl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w7_e5xbbg"/><path class="lke8sfb2b"/><path class="hya45hbax"/><path class="qqi_ahbwa"/><path class="cnou19b4m"/><path class="y1cvh44tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tandoor-recipes"} {...others} />);
}

export default Component;
