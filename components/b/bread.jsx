import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohqr0kb7r.css';
import '../../css/e/eivig8z_t.css';
import '../../css/p/pln1t8f_n.css';
import '../../css/w/wh8zg4byf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ohqr0kb7r"/><path class="eivig8z_t"/><path class="pln1t8f_n"/><path class="wh8zg4byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bread"} {...others} />);
}

export default Component;
