import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-afv9q-c.css';
import '../../css/x/x5fefv7uq.css';
import '../../css/g/g_aicbc-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-afv9q-c"/><path class="x5fefv7uq"/><path class="g_aicbc-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-gaming-robot-flat"} {...others} />);
}

export default Component;
