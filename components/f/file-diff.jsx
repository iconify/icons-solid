import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cf3mtvj3r.css';
import '../../css/e/estf8zb3r.css';
import '../../css/s/s1i5aybra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cf3mtvj3r"/><path class="estf8zb3r"/><path class="s1i5aybra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-diff"} {...others} />);
}

export default Component;
