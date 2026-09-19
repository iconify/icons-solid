import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znkefbbam.css';
import '../../css/d/d322l4s1v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="znkefbbam"/><path class="d322l4s1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:chestnut"} {...others} />);
}

export default Component;
