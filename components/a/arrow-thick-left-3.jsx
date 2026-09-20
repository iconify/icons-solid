import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cc2khxrqp.css';
import '../../css/f/fbxiy60lh.css';
import '../../css/l/li0ze0bie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cc2khxrqp"/><path class="fbxiy60lh"/><path class="li0ze0bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-thick-left-3"} {...others} />);
}

export default Component;
