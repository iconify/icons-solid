import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7pomwafq.css';
import '../../css/c/cni5k5b-q.css';
import '../../css/d/d23d6lbts.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a7pomwafq"/><path class="cni5k5b-q"/><path class="d23d6lbts"/><path class="wfx3nk7mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-valve-48"} {...others} />);
}

export default Component;
