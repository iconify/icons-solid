import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfx3nk7mg.css';
import '../../css/v/voyu-9ngf.css';
import '../../css/q/q1l0azzvx.css';
import '../../css/z/zlh-73p5g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wfx3nk7mg"/><path class="voyu-9ngf"/><path class="q1l0azzvx"/><path class="zlh-73p5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lever-48"} {...others} />);
}

export default Component;
