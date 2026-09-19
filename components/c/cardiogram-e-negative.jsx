import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upt6vgbkc.css';
import '../../css/n/n8yd7w-5u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCardiogramENegative0)" class="cuyn6tgcc"><path class="upt6vgbkc"/><path clip-rule="evenodd" class="n8yd7w-5u"/></g><defs><clipPath id="healthiconsCardiogramENegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cardiogram-e-negative"} {...others} />);
}

export default Component;
