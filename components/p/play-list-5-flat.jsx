import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/inkrjwb3i.css';
import '../../css/g/gniky1bbo.css';
import '../../css/b/bwzd4r7_c.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="inkrjwb3i"/><path class="gniky1bbo"/><path class="bwzd4r7_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-5-flat"} {...others} />);
}

export default Component;
