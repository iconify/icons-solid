import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxezjuc9o.css';
import '../../css/f/fwspsvidw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lxezjuc9o"/><path class="fwspsvidw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-bag-favorite"} {...others} />);
}

export default Component;
