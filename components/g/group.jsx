import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/n/nm85yq2ge.css';
import '../../css/u/u-r55tbuq.css';
import '../../css/v/vu27swb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="nm85yq2ge"/><rect class="u-r55tbuq"/><path class="vu27swb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:group"} {...others} />);
}

export default Component;
