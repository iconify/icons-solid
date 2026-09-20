import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/khoyjm01l.css';
import '../../css/d/dfopxo9zu.css';
import '../../css/c/c_i9i8gsy.css';
import '../../css/j/jxs6c_bvc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="khoyjm01l"/><path class="dfopxo9zu"/><path class="c_i9i8gsy"/><path class="jxs6c_bvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:inbox-post"} {...others} />);
}

export default Component;
