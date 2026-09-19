import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t9kj0wniw.css';
import '../../css/x/x8nf3k1cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t9kj0wniw"/><path class="x8nf3k1cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hard-drive"} {...others} />);
}

export default Component;
