import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8hwotsgc.css';
import '../../css/v/v6q00pbel.css';
import '../../css/v/vhr7liyye.css';
import '../../css/i/iln4g2p0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x8hwotsgc"/><path class="v6q00pbel"/><path class="vhr7liyye"/><path class="iln4g2p0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:baby-bottle"} {...others} />);
}

export default Component;
