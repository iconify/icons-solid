import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o9jkvab_f.css';
import '../../css/x/xcs8l2-1f.css';
import '../../css/r/rqle2ryay.css';
import '../../css/e/e2s3ijb-z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="o9jkvab_f"/><path class="xcs8l2-1f"/><circle class="rqle2ryay"/><path class="e2s3ijb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-binocular-binocular-binoculars-view-zoom"} {...others} />);
}

export default Component;
