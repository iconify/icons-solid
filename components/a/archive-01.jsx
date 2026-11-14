import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0u8lo1sp.css';
import '../../css/k/kk5y-tbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g0u8lo1sp"/><path class="kk5y-tbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-01"} {...others} />);
}

export default Component;
