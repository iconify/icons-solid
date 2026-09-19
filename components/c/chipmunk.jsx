import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywu4_4b-u.css';
import '../../css/m/me6xtzbri.css';
import '../../css/z/z3fiy1goj.css';
import '../../css/x/x_umbtwhv.css';
import '../../css/i/ijtms13ik.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ywu4_4b-u"/><path class="me6xtzbri"/><path class="z3fiy1goj"/><path class="x_umbtwhv"/><path class="ijtms13ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:chipmunk"} {...others} />);
}

export default Component;
