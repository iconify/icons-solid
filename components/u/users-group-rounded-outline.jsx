import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ex2bgybnk.css';
import '../../css/f/fqav45-4t.css';
import '../../css/a/ac2ne0tob.css';
import '../../css/r/rh5a4_81t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ex2bgybnk"/><path class="fqav45-4t"/><path clip-rule="evenodd" class="ac2ne0tob"/><path class="rh5a4_81t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-outline"} {...others} />);
}

export default Component;
