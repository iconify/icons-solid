import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvc2u1bgn.css';
import '../../css/w/wp1uefsie.css';
import '../../css/w/wmijqjbod.css';
import '../../css/z/zqn1mcbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yvc2u1bgn"/><path class="wp1uefsie"/><path class="wmijqjbod"/><path class="zqn1mcbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:package-stack-2"} {...others} />);
}

export default Component;
