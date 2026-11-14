import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3-denbmb.css';
import '../../css/i/ink891bfz.css';
import '../../css/y/y5c-b7h0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j3-denbmb"/><path class="ink891bfz"/><path class="y5c-b7h0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-add-01"} {...others} />);
}

export default Component;
