import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osfbwubry.css';
import '../../css/q/qafvmubuv.css';
import '../../css/j/jyumk6b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="osfbwubry"/><path class="qafvmubuv"/><path class="jyumk6b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-line-duotone"} {...others} />);
}

export default Component;
