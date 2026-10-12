import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s7k-s_blk.css';
import '../../css/r/r7i6vh0nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s7k-s_blk"/><path class="r7i6vh0nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reload"} {...others} />);
}

export default Component;
