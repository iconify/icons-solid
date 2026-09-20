import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d10j25_kc.css';
import '../../css/i/i5xwbzs4h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d10j25_kc"/><path clip-rule="evenodd" class="i5xwbzs4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:straight-cap-flat"} {...others} />);
}

export default Component;
