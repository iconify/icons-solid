import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkb2m8byg.css';
import '../../css/n/nm-6a4bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vkb2m8byg"/><path class="nm-6a4bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-filter"} {...others} />);
}

export default Component;
