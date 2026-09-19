import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_n1dze3o.css';
import '../../css/o/of9isbc_m.css';
import '../../css/t/tlq57j7uz.css';
import '../../css/h/hc1l-354e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n_n1dze3o"/><path class="of9isbc_m"/><path class="tlq57j7uz"/><path class="hc1l-354e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-in-tuxedo"} {...others} />);
}

export default Component;
