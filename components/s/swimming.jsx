import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lkdxq8b7i.css';
import '../../css/h/h5w6q1y6d.css';
import '../../css/t/tf7ojvbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lkdxq8b7i"/><circle class="h5w6q1y6d"/><path class="tf7ojvbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:swimming"} {...others} />);
}

export default Component;
