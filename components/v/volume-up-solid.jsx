import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ti3lcux8x.css';
import '../../css/g/gjjyej82e.css';
import '../../css/a/ae894nmnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ti3lcux8x"/><path clip-rule="evenodd" class="gjjyej82e"/><path clip-rule="evenodd" class="ae894nmnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:volume-up-solid"} {...others} />);
}

export default Component;
