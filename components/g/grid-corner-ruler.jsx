import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p18lntbms.css';
import '../../css/z/zqgxlpbyx.css';
import '../../css/i/i73p8iv3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="p18lntbms"/><path class="zqgxlpbyx"/><path class="i73p8iv3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:grid-corner-ruler"} {...others} />);
}

export default Component;
