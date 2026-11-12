import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wap4fu7vn.css';
import '../../css/m/mex95lw7c.css';
import '../../css/m/mcdgwguil.css';
import '../../css/h/hh45kun6a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wap4fu7vn"/><path class="mex95lw7c"/><path class="mcdgwguil"/><path class="hh45kun6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-containers-lxc-light"} {...others} />);
}

export default Component;
