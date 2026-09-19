import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0rdw2byb.css';
import '../../css/p/pugpnab9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b0rdw2byb"/><path class="pugpnab9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tongue"} {...others} />);
}

export default Component;
