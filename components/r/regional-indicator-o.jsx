import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc85k4qnp.css';
import '../../css/m/mozg7z0hf.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/q/qkplhcbct.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="uc85k4qnp"/><path class="mozg7z0hf"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="qkplhcbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-o"} {...others} />);
}

export default Component;
