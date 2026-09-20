import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uf0t3abhr.css';
import '../../css/i/ijwv13b6x.css';
import '../../css/i/ie_giubao.css';
import '../../css/v/vbjlnvb0q.css';
import '../../css/d/dps-4hdeh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="uf0t3abhr"/><path class="ijwv13b6x"/><path class="ie_giubao"/><path class="vbjlnvb0q"/><path class="dps-4hdeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:chicken-grilled-stream"} {...others} />);
}

export default Component;
