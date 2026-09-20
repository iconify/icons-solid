import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zej5m-rko.css';
import '../../css/f/fhy1mvfif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zej5m-rko"/><path class="fhy1mvfif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-line-duotone"} {...others} />);
}

export default Component;
