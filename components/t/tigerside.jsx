import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbz4gebdo.css';
import '../../css/a/ats_5vb3p.css';
import '../../css/m/m8plgtpzf.css';
import '../../css/e/ee7zi1btq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dbz4gebdo"/><path class="ats_5vb3p"/><path class="m8plgtpzf"/><path class="ee7zi1btq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tigerside"} {...others} />);
}

export default Component;
