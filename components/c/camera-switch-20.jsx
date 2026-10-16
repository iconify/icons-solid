import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umcbrdrzf.css';
import '../../css/n/nwmd57bti.css';
import '../../css/t/thdncb4gb.css';
import '../../css/i/i8kflg27r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="umcbrdrzf"/><path class="nwmd57bti"/><path class="thdncb4gb"/><path class="i8kflg27r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-switch-20"} {...others} />);
}

export default Component;
