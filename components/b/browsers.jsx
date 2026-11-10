import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9imlrehb.css';
import '../../css/j/j4jvv7bkc.css';
import '../../css/f/f4_op1bij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o9imlrehb"/><path class="j4jvv7bkc"/><path class="f4_op1bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browsers"} {...others} />);
}

export default Component;
