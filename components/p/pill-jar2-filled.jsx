import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix1g3dbsk.css';
import '../../css/n/nauxe-bnh.css';
import '../../css/r/rer6grbox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ix1g3dbsk"/><path clip-rule="evenodd" class="nauxe-bnh"/><path class="rer6grbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pill-jar2-filled"} {...others} />);
}

export default Component;
