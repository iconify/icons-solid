import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-o32sb-w.css';
import '../../css/b/bo3ehacnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h-o32sb-w"/><path class="bo3ehacnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:umbrella-full"} {...others} />);
}

export default Component;
