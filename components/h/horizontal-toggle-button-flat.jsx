import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sp2fbb8bo.css';
import '../../css/c/cpy0n4a_h.css';
import '../../css/i/isx5y3bfo.css';
import '../../css/f/fa1iec66m.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sp2fbb8bo"/><path class="cpy0n4a_h"/><path class="isx5y3bfo"/><path class="fa1iec66m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:horizontal-toggle-button-flat"} {...others} />);
}

export default Component;
