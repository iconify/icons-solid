import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auzsn3b_x.css';
import '../../css/h/hjfomz99y.css';
import '../../css/b/bmzx_ibhn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="auzsn3b_x"/><path class="hjfomz99y"/><path class="bmzx_ibhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:scissors"} {...others} />);
}

export default Component;
