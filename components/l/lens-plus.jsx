import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqnud0ptr.css';
import '../../css/k/kj1ww7d1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sqnud0ptr"/><path class="kj1ww7d1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:lens-plus"} {...others} />);
}

export default Component;
