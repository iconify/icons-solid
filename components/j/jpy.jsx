import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d_kn0np1m.css';
import '../../css/j/jew5n_nry.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="d_kn0np1m"/><path class="jew5n_nry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:jpy"} {...others} />);
}

export default Component;
