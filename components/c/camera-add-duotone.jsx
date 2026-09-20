import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/czat0q-qi.css';
import '../../css/h/hkpwmqo7k.css';
import '../../css/m/m6yu4qj4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="czat0q-qi"/><path clip-rule="evenodd" class="hkpwmqo7k"/><path class="m6yu4qj4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:camera-add-duotone"} {...others} />);
}

export default Component;
