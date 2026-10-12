import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8p9beb9t.css';
import '../../css/n/nr90d_bue.css';
import '../../css/k/k1a7lecsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u8p9beb9t"/><path class="nr90d_bue"/><path class="k1a7lecsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:axe"} {...others} />);
}

export default Component;
