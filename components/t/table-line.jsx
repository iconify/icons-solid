import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmi5l9bju.css';
import '../../css/h/hbd-r_bdq.css';
import '../../css/n/n2v3wgbmd.css';
import '../../css/v/v571wkxlx.css';
import '../../css/j/jfco_8x9q.css';
import '../../css/h/hbakpg7fr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 kmi5l9bju"/><path class="clr-i-outline clr-i-outline-path-2 hbd-r_bdq"/><path class="clr-i-outline clr-i-outline-path-3 n2v3wgbmd"/><path class="clr-i-outline clr-i-outline-path-4 v571wkxlx"/><path class="clr-i-outline clr-i-outline-path-5 jfco_8x9q"/><path class="clr-i-outline clr-i-outline-path-6 hbakpg7fr"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:table-line"} {...others} />);
}

export default Component;
