import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wz1nb27na.css';
import '../../css/r/r-jl6cbyp.css';
import '../../css/e/edx-j2rop.css';
import '../../css/b/bijfs9bxn.css';
import '../../css/q/qo6fe4blc.css';
import '../../css/m/mbaepdy6p.css';
import '../../css/f/f9t3j5bif.css';
import '../../css/c/cm0a7wi-f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wz1nb27na"/><path class="r-jl6cbyp"/><path class="edx-j2rop"/><path class="bijfs9bxn"/><path class="qo6fe4blc"/><path class="mbaepdy6p"/><path class="f9t3j5bif"/><path class="cm0a7wi-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ring-one"} {...others} />);
}

export default Component;
