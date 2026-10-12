import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4nvvob8l.css';
import '../../css/d/dcy-hxbol.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c4nvvob8l"/><path class="dcy-hxbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:duplicate-stroke-20"} {...others} />);
}

export default Component;
