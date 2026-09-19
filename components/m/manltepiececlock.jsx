import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg809gbzw.css';
import '../../css/t/tmzfn5bmd.css';
import '../../css/n/ng9x56bxd.css';
import '../../css/r/rjpe63b-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xg809gbzw"/><path class="tmzfn5bmd"/><path class="ng9x56bxd"/><path class="rjpe63b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:manltepiececlock"} {...others} />);
}

export default Component;
