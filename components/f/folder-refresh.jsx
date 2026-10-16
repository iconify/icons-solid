import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/loh4lgjac.css';
import '../../css/o/o4r3oob4v.css';
import '../../css/h/hi0a0ke7p.css';
import '../../css/z/ze-jfxgpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="loh4lgjac"/><path class="o4r3oob4v"/><path class="hi0a0ke7p"/><path class="ze-jfxgpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-refresh"} {...others} />);
}

export default Component;
