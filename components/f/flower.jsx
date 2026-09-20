import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyhj8vbvd.css';
import '../../css/y/yh9b1irac.css';
import '../../css/s/s7rmi0anc.css';
import '../../css/o/ou9-rm22b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eyhj8vbvd"/><path class="yh9b1irac"/><path class="s7rmi0anc"/><path class="ou9-rm22b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flower"} {...others} />);
}

export default Component;
