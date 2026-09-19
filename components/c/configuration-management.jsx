import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/matj_mbse.css';
import '../../css/s/su639bbye.css';
import '../../css/f/f498sebzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="matj_mbse"/><path class="su639bbye"/><path class="f498sebzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:configuration-management"} {...others} />);
}

export default Component;
