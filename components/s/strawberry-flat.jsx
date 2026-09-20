import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9r1ddcku.css';
import '../../css/a/a_eosd8fx.css';
import '../../css/q/q277pjbhm.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9r1ddcku"/><path class="a_eosd8fx"/><path class="q277pjbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:strawberry-flat"} {...others} />);
}

export default Component;
