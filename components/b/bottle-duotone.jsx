import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqcn6nbje.css';
import '../../css/f/f-dvbobck.css';
import '../../css/a/amkt4i8-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jqcn6nbje"/><path clip-rule="evenodd" class="f-dvbobck"/><path class="amkt4i8-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bottle-duotone"} {...others} />);
}

export default Component;
