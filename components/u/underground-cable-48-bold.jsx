import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wymfiej7o.css';
import '../../css/c/cdzww56nj.css';
import '../../css/d/dq4y28bnt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wymfiej7o"/><path class="cdzww56nj"/><path class="dq4y28bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:underground-cable-48-bold"} {...others} />);
}

export default Component;
