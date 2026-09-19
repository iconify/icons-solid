import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdz57h50f.css';
import '../../css/z/zkos_fzvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xdz57h50f"/><path class="zkos_fzvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shopping-bag-check"} {...others} />);
}

export default Component;
