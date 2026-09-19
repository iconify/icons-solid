import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vivj0oign.css';
import '../../css/j/jw6z2q0oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vivj0oign"/><path class="jw6z2q0oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hands-clapping"} {...others} />);
}

export default Component;
