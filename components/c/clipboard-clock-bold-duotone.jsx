import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/doitk1blw.css';
import '../../css/r/r92k6gisg.css';
import '../../css/c/c4946-17v.css';
import '../../css/m/mo43we00a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="doitk1blw"/><path clip-rule="evenodd" class="r92k6gisg"/><path class="c4946-17v"/><path class="mo43we00a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-clock-bold-duotone"} {...others} />);
}

export default Component;
