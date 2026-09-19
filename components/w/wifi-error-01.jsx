import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/za5v79b2j.css';
import '../../css/t/tiuuqfbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="za5v79b2j"/><path class="tiuuqfbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wifi-error-01"} {...others} />);
}

export default Component;
