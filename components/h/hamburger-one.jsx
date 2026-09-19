import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9w4fw2xg.css';
import '../../css/r/ro52czqkk.css';
import '../../css/h/h5g_z9czz.css';
import '../../css/w/wpop_mqpv.css';
import '../../css/k/k9--7-60y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRzC4sdRj"><g class="ft5dv1b6b"><path class="q9w4fw2xg"/><rect class="ro52czqkk"/><path class="h5g_z9czz"/><circle class="wpop_mqpv"/><circle class="k9--7-60y"/></g></mask></defs><path mask="url(#SVGRzC4sdRj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hamburger-one"} {...others} />);
}

export default Component;
