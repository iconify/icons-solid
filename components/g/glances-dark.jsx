import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oomm7xbyq.css';
import '../../css/o/obx9cdbgr.css';
import '../../css/s/s5izy6bhh.css';
import '../../css/q/qq_ru7bim.css';
import '../../css/n/n7eio94ce.css';

const viewBox = {"width":466,"height":513};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oomm7xbyq"/><path clip-rule="evenodd" class="obx9cdbgr"/><path clip-rule="evenodd" class="s5izy6bhh"/><path clip-rule="evenodd" class="qq_ru7bim"/><path class="n7eio94ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glances-dark"} {...others} />);
}

export default Component;
