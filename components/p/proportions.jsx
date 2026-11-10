import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2f83dboy.css';
import '../../css/a/a6ke6j7kv.css';
import '../../css/z/zdwupmf9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j2f83dboy"/><path class="a6ke6j7kv"/><path class="zdwupmf9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:proportions"} {...others} />);
}

export default Component;
