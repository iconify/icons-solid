import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re15mubga.css';
import '../../css/r/rhjk9ujih.css';
import '../../css/j/jtbcv1bmm.css';
import '../../css/p/pfp2tbb1y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="re15mubga"/><path class="rhjk9ujih"/><path class="jtbcv1bmm"/><path class="pfp2tbb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rooftop-wind-48"} {...others} />);
}

export default Component;
