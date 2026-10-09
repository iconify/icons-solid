import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbx9m__qq.css';
import '../../css/b/bj40tef2x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tbx9m__qq"/><path class="bj40tef2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-right-20"} {...others} />);
}

export default Component;
