import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxxw8pbdr.css';
import '../../css/h/h6mt742yb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uxxw8pbdr"/><path class="h6mt742yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:dental-crown-1"} {...others} />);
}

export default Component;
