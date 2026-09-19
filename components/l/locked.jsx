import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kj_mg6-kn.css';
import '../../css/t/t7fo56b7x.css';
import '../../css/b/btlyaxjfz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kj_mg6-kn"/><path class="t7fo56b7x"/><path class="btlyaxjfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:locked"} {...others} />);
}

export default Component;
