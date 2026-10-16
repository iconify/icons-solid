import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r72actb8a.css';
import '../../css/i/iub47d_vj.css';
import '../../css/q/q8eb2xaoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r72actb8a"/><path class="iub47d_vj"/><path class="q8eb2xaoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-decrease-font-weight"} {...others} />);
}

export default Component;
