import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg0d9fh6u.css';
import '../../css/c/c_b1bdc7i.css';
import '../../css/e/e5bjqi7bk.css';
import '../../css/q/qhh6ftvhk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mg0d9fh6u"/><path class="c_b1bdc7i"/><path class="e5bjqi7bk"/><path class="qhh6ftvhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-switch-20-bold"} {...others} />);
}

export default Component;
