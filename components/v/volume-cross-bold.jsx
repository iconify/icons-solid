import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8zvzvzkl.css';
import '../../css/o/oxic0dcak.css';
import '../../css/d/dagas5qlh.css';
import '../../css/g/gb7ygw3xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i8zvzvzkl"/><path clip-rule="evenodd" class="oxic0dcak"/><path class="dagas5qlh"/><path class="gb7ygw3xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-bold"} {...others} />);
}

export default Component;
