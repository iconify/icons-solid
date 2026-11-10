import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma_aklbun.css';
import '../../css/j/jj4xmjt4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ma_aklbun"/><path class="jj4xmjt4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-auto-correction"} {...others} />);
}

export default Component;
