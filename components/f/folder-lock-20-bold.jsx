import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1qu1v53u.css';
import '../../css/u/u9c-71bvi.css';
import '../../css/v/vw_n11rmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n1qu1v53u"/><path class="u9c-71bvi"/><path class="vw_n11rmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-lock-20-bold"} {...others} />);
}

export default Component;
