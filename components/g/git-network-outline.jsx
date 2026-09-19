import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9gmjl-2d.css';
import '../../css/f/fwg5bsbqs.css';
import '../../css/y/y-m3momgu.css';
import '../../css/d/dc1j7wpdw.css';
import '../../css/x/x-czm5bcz.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="g9gmjl-2d"/><circle class="fwg5bsbqs"/><path class="y-m3momgu"/><circle class="dc1j7wpdw"/><path class="x-czm5bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:git-network-outline"} {...others} />);
}

export default Component;
