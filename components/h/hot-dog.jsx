import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mewa30evz.css';
import '../../css/a/ar14ntiwg.css';
import '../../css/v/vhv3_5mqf.css';
import '../../css/z/zgewaubsk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mewa30evz"/><path class="ar14ntiwg"/><path class="vhv3_5mqf"/><path class="zgewaubsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hot-dog"} {...others} />);
}

export default Component;
