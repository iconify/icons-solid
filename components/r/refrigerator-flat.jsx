import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa1-jbcbc.css';
import '../../css/t/tg05lba0t.css';
import '../../css/q/qtekbtbjg.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fa1-jbcbc"/><path class="tg05lba0t"/><path class="qtekbtbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:refrigerator-flat"} {...others} />);
}

export default Component;
