import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxqv9lhyv.css';
import '../../css/c/cg6w78bdt.css';
import '../../css/z/zr4agjfqn.css';
import '../../css/s/svkr3ie9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qxqv9lhyv"/><path class="cg6w78bdt"/><path class="zr4agjfqn"/><path class="svkr3ie9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:g-clamp-48"} {...others} />);
}

export default Component;
