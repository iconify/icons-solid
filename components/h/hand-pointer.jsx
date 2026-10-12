import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xalhp48-p.css';
import '../../css/j/jgs_1fbzk.css';
import '../../css/d/d_giv3k3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xalhp48-p"/><path class="jgs_1fbzk"/><path class="d_giv3k3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-pointer"} {...others} />);
}

export default Component;
