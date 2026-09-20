import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bckavcbdl.css';
import '../../css/d/d958dab4i.css';
import '../../css/f/fkxyg9xjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bckavcbdl"/><path class="d958dab4i"/><path clip-rule="evenodd" class="fkxyg9xjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:thermometer-duotone"} {...others} />);
}

export default Component;
