import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we467pf1g.css';
import '../../css/x/x_1cdpl8v.css';
import '../../css/t/t-r0b5wbf.css';
import '../../css/u/uaq6dzbze.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we467pf1g"/><path class="x_1cdpl8v"/><path class="t-r0b5wbf"/><path class="uaq6dzbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linux-containers-lxc-dark"} {...others} />);
}

export default Component;
