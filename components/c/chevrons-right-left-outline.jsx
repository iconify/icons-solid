import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmt8ryb3g.css';
import '../../css/u/uijvjtbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmt8ryb3g"/><path class="uijvjtbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-outline"} {...others} />);
}

export default Component;
