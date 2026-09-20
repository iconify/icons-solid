import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foi77rb5z.css';
import '../../css/e/eud6ppvya.css';
import '../../css/h/h_n6g_bcp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="foi77rb5z"/><path clip-rule="evenodd" class="eud6ppvya"/><path class="h_n6g_bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:soft-drink-can-flat"} {...others} />);
}

export default Component;
