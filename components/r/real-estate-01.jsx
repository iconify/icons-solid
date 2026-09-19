import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0a7tkekm.css';
import '../../css/b/b946ibi6z.css';
import '../../css/m/mzqewjw4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b0a7tkekm"/><path class="b946ibi6z"/><path class="mzqewjw4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:real-estate-01"} {...others} />);
}

export default Component;
