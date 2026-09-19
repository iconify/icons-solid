import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j3yulqb2k.css';
import '../../css/x/xdrgajgpb.css';
import '../../css/l/loxsdihus.css';
import '../../css/t/tnozr_b6f.css';
import '../../css/n/nbnd6ubzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="j3yulqb2k"/><path class="xdrgajgpb"/><path class="loxsdihus"/><path class="tnozr_b6f"/><path class="nbnd6ubzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tent"} {...others} />);
}

export default Component;
