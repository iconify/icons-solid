import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kdchbbh.css';
import '../../css/c/cm8p-pbwc.css';
import '../../css/c/cqo-d7c2e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x1kdchbbh"/><path clip-rule="evenodd" class="cm8p-pbwc"/><path class="cqo-d7c2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:earth-airplane-flat"} {...others} />);
}

export default Component;
