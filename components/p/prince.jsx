import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esso3_bvo.css';
import '../../css/h/hdb1zcbyi.css';
import '../../css/n/nu9hkkb5n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="esso3_bvo"/><path class="hdb1zcbyi"/><path class="nu9hkkb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:prince"} {...others} />);
}

export default Component;
