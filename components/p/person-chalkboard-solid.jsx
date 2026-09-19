import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mm9qf3b4s.css';
import '../../css/a/axfh34b7v.css';
import '../../css/h/h79p-zbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mm9qf3b4s"/><path class="axfh34b7v"/><path class="h79p-zbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:person-chalkboard-solid"} {...others} />);
}

export default Component;
