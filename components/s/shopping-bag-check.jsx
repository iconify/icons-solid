import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0_mz-d2j.css';
import '../../css/g/g2xrcsbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p0_mz-d2j"/><path class="g2xrcsbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-bag-check"} {...others} />);
}

export default Component;
