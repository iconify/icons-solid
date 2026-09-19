import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xfsy1sb2g.css';
import '../../css/k/k8dfb1b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xfsy1sb2g"/><path class="k8dfb1b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:joystick-02"} {...others} />);
}

export default Component;
