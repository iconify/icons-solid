import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bu2a7ab-m.css';
import '../../css/n/n2i9zdrgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bu2a7ab-m"/><path class="n2i9zdrgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-to-image"} {...others} />);
}

export default Component;
