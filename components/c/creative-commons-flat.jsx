import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8psh3biy.css';
import '../../css/r/rr2w20b9o.css';
import '../../css/i/iocftcc9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="e8psh3biy"/><path clip-rule="evenodd" class="rr2w20b9o"/><path clip-rule="evenodd" class="iocftcc9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:creative-commons-flat"} {...others} />);
}

export default Component;
