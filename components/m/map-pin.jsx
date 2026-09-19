import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iulpltu0r.css';
import '../../css/z/zr9bdwb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iulpltu0r"/><path class="zr9bdwb4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:map-pin"} {...others} />);
}

export default Component;
