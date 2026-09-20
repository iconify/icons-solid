import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxe1q2bbc.css';
import '../../css/y/yea6u7e1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxe1q2bbc"/><path class="yea6u7e1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-broken"} {...others} />);
}

export default Component;
