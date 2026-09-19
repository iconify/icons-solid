import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hgo0pgs3a.css';
import '../../css/p/p-hc53bai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hgo0pgs3a"/><path class="p-hc53bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-double-up"} {...others} />);
}

export default Component;
