import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3croqkqz.css';
import '../../css/b/bvwrmbngr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f3croqkqz"/><path class="bvwrmbngr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hair-dryer"} {...others} />);
}

export default Component;
