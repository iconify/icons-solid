import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nczf9obkd.css';
import '../../css/c/c-s7-tb1l.css';
import '../../css/f/f3r1kpbwq.css';
import '../../css/d/dagi9acwx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nczf9obkd"/><path class="c-s7-tb1l"/><path class="f3r1kpbwq"/><path class="dagi9acwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crimper-20-bold"} {...others} />);
}

export default Component;
