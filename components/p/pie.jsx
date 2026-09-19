import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmlrd2dzs.css';
import '../../css/p/pcxg8ubdq.css';
import '../../css/i/ig17hdb9u.css';
import '../../css/y/ym70or71v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cmlrd2dzs"/><path class="pcxg8ubdq"/><path class="ig17hdb9u"/><path class="ym70or71v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pie"} {...others} />);
}

export default Component;
