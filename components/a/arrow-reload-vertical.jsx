import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/unjja_t1u.css';
import '../../css/m/mi2w8hksr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="unjja_t1u"/><path class="mi2w8hksr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-reload-vertical"} {...others} />);
}

export default Component;
