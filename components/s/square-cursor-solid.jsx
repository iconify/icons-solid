import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w2i5xtfsh.css';
import '../../css/h/h-g0l-irp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w2i5xtfsh"/><path class="h-g0l-irp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:square-cursor-solid"} {...others} />);
}

export default Component;
