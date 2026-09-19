import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn99un74y.css';
import '../../css/p/pzu7n0f2i.css';
import '../../css/v/vko700nqz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gn99un74y"/><path class="pzu7n0f2i"/><path class="vko700nqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oncoming-fist"} {...others} />);
}

export default Component;
