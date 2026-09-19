import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u8zk_ogia.css';
import '../../css/x/xnhyfxxio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u8zk_ogia"/><path class="xnhyfxxio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brick-wall-shield"} {...others} />);
}

export default Component;
