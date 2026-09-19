import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obp0fjbkr.css';
import '../../css/w/w-keenbky.css';
import '../../css/r/rb_wcnqep.css';
import '../../css/h/h4c_9fbjc.css';
import '../../css/x/x8l-rqbaz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="obp0fjbkr"/><path class="w-keenbky"/><path class="rb_wcnqep"/><path class="h4c_9fbjc"/><path class="x8l-rqbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mobile-phone"} {...others} />);
}

export default Component;
