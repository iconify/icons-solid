import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bv9byxb_f.css';
import '../../css/v/v5vuq7yua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bv9byxb_f"/><path class="v5vuq7yua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:semi-truck"} {...others} />);
}

export default Component;
