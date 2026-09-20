import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eo90_nbnk.css';
import '../../css/z/z7apcccjt.css';
import '../../css/g/g15y3hbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="eo90_nbnk"/><path class="z7apcccjt"/><path class="g15y3hbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:password-type"} {...others} />);
}

export default Component;
