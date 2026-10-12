import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1gbw5rxy.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/i/i3lxtac9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1gbw5rxy"/><path class="rs0wrok6f"/><path class="i3lxtac9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-wind"} {...others} />);
}

export default Component;
