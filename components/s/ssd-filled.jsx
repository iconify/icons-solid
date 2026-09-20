import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2ypyqbhm.css';
import '../../css/o/obfty755m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d2ypyqbhm"/><path clip-rule="evenodd" class="obfty755m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ssd-filled"} {...others} />);
}

export default Component;
