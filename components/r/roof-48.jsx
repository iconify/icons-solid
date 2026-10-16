import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzdbytarx.css';
import '../../css/f/f1f6b4ojb.css';
import '../../css/c/ckv-n0b7d.css';
import '../../css/p/pthdn94lk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzdbytarx"/><path class="f1f6b4ojb"/><path class="ckv-n0b7d"/><path class="pthdn94lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roof-48"} {...others} />);
}

export default Component;
