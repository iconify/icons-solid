import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqjx-nmaj.css';
import '../../css/w/wpn3syb-x.css';
import '../../css/z/z82aoebbc.css';
import '../../css/e/e1td26b8q.css';
import '../../css/c/cmafybb1b.css';
import '../../css/o/ovwd03bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tqjx-nmaj"/><path class="wpn3syb-x"/><path class="z82aoebbc"/><path class="e1td26b8q"/><path class="cmafybb1b"/><path class="ovwd03bsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cursor-hand-2"} {...others} />);
}

export default Component;
