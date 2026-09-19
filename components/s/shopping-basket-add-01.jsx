import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmdt8abhk.css';
import '../../css/u/uwb4o560p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xmdt8abhk"/><path class="uwb4o560p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-add-01"} {...others} />);
}

export default Component;
