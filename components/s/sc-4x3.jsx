import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp649actv.css';
import '../../css/t/twafu6bzl.css';
import '../../css/s/swd51fzfc.css';
import '../../css/j/jbrvtvlbz.css';
import '../../css/g/gb6m21box.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="gp649actv"/><path class="twafu6bzl"/><path class="swd51fzfc"/><path class="jbrvtvlbz"/><path class="gb6m21box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sc-4x3"} {...others} />);
}

export default Component;
