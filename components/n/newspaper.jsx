import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pu_7_8b3h.css';
import '../../css/m/mo8tiobxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pu_7_8b3h"/><path class="mo8tiobxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:newspaper"} {...others} />);
}

export default Component;
