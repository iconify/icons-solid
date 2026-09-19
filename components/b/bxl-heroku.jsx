import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a44ve8u8n.css';
import '../../css/s/sxn19pbzw.css';
import '../../css/r/rfsxccbks.css';
import '../../css/o/oqup6jbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a44ve8u8n"/><path class="sxn19pbzw"/><path class="rfsxccbks"/><path class="oqup6jbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-heroku"} {...others} />);
}

export default Component;
