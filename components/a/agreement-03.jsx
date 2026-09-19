import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqqlflk3u.css';
import '../../css/z/zw9ur85fx.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bqqlflk3u"/><path class="zw9ur85fx"/><path class="tlhsqgbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:agreement-03"} {...others} />);
}

export default Component;
