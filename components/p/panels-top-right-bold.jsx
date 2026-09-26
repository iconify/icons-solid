import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzdegqbrv.css';
import '../../css/q/qo3-r85um.css';
import '../../css/m/moaw0d06n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gzdegqbrv"/><path class="qo3-r85um"/><path clip-rule="evenodd" class="moaw0d06n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-right-bold"} {...others} />);
}

export default Component;
