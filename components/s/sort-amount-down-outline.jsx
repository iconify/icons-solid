import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myquthk1w.css';
import '../../css/q/q_4uk-b_w.css';
import '../../css/n/nuj67m2yh.css';
import '../../css/o/o1fuzks_z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="myquthk1w"/><path class="q_4uk-b_w"/><path clip-rule="evenodd" class="nuj67m2yh"/><path class="o1fuzks_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-amount-down-outline"} {...others} />);
}

export default Component;
