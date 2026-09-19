import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdzi00bpt.css';
import '../../css/y/y96pjh_pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdzi00bpt"/><path class="y96pjh_pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-chart"} {...others} />);
}

export default Component;
