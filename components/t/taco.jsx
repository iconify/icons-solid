import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrte8tbdb.css';
import '../../css/o/oryfwuh6y.css';
import '../../css/d/dm____bki.css';
import '../../css/w/whhmzyuxo.css';
import '../../css/y/y_x49ub9l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mrte8tbdb"/><path class="oryfwuh6y"/><path class="dm____bki"/><path class="whhmzyuxo"/><path class="y_x49ub9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:taco"} {...others} />);
}

export default Component;
