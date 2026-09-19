import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9w4fw2xg.css';
import '../../css/q/q4qqcjs5d.css';
import '../../css/i/iract0bvy.css';
import '../../css/w/wpop_mqpv.css';
import '../../css/k/k9--7-60y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcti56cFR"><g class="ft5dv1b6b"><path class="q9w4fw2xg"/><rect class="q4qqcjs5d"/><path class="iract0bvy"/><circle class="wpop_mqpv"/><circle class="k9--7-60y"/></g></mask></defs><path mask="url(#SVGcti56cFR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hamburger-one"} {...others} />);
}

export default Component;
