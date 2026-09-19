import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le9kem29e.css';
import '../../css/j/j1go70hcn.css';
import '../../css/l/lgr3-yo0q.css';
import '../../css/r/rsqzy8bze.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="le9kem29e"/><path class="j1go70hcn"/><circle class="lgr3-yo0q"/><path class="rsqzy8bze"/><path class="n35dlibfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:notification-off-duotone"} {...others} />);
}

export default Component;
