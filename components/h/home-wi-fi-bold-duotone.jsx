import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g23epvw1o.css';
import '../../css/h/hosmgacxy.css';
import '../../css/u/ugpo-abdx.css';
import '../../css/y/ybm4f5bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g23epvw1o"/><path class="hosmgacxy"/><path class="ugpo-abdx"/><path class="ybm4f5bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wi-fi-bold-duotone"} {...others} />);
}

export default Component;
