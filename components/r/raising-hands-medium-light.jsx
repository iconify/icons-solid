import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-z3oswao.css';
import '../../css/q/q7c_jrbgs.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="u-z3oswao"/><path class="q7c_jrbgs"/><path class="de29zjbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raising-hands-medium-light"} {...others} />);
}

export default Component;
