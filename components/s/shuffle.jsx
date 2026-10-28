import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f4ley9blm.css';
import '../../css/u/uxuy8f4og.css';
import '../../css/s/s12xh-w7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f4ley9blm"/><path class="uxuy8f4og"/><path class="s12xh-w7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shuffle"} {...others} />);
}

export default Component;
