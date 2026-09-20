import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ljmxa-k.css';
import '../../css/w/wh3a8fu7z.css';
import '../../css/l/labafylcg.css';
import '../../css/s/sucgr9bbf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p-ljmxa-k"/><path class="wh3a8fu7z"/><path class="labafylcg"/><path class="sucgr9bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:medical-search-diagnosis"} {...others} />);
}

export default Component;
