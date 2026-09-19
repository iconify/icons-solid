import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os_ncacwq.css';
import '../../css/s/sweyqnbwx.css';
import '../../css/a/a0enb4j2q.css';
import '../../css/r/rluk9abvi.css';
import '../../css/q/q1-vaj8oz.css';
import '../../css/p/phz7lwb8a.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 os_ncacwq"/><circle class="clr-i-outline clr-i-outline-path-2 sweyqnbwx"/><circle class="a0enb4j2q clr-i-outline clr-i-outline-path-3"/><circle class="clr-i-outline clr-i-outline-path-4 rluk9abvi"/><circle class="clr-i-outline clr-i-outline-path-5 q1-vaj8oz"/><circle class="clr-i-outline clr-i-outline-path-6 phz7lwb8a"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:drag-handle-corner-line"} {...others} />);
}

export default Component;
