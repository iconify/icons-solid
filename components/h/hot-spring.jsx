import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh-d496ur.css';
import '../../css/o/oj2fc5b5o.css';
import '../../css/x/x9uztkbxu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="sh-d496ur"/><path class="oj2fc5b5o"/><path class="x9uztkbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hot-spring"} {...others} />);
}

export default Component;
