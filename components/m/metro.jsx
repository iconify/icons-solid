import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfuiu8b6u.css';
import '../../css/m/m51ssub5f.css';
import '../../css/x/xg046ujlu.css';
import '../../css/h/hze62kovg.css';
import '../../css/v/vineujmql.css';
import '../../css/f/frrafq9tp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="dfuiu8b6u"/><path class="m51ssub5f"/><path class="xg046ujlu"/><path class="hze62kovg"/><path class="vineujmql"/><path class="frrafq9tp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:metro"} {...others} />);
}

export default Component;
