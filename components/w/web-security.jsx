import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/il82e_lnh.css';
import '../../css/f/fucf0abgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="il82e_lnh"/><path class="fucf0abgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:web-security"} {...others} />);
}

export default Component;
