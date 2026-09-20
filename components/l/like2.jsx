import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oy_3s8b3v.css';
import '../../css/v/v5jshh2bo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oy_3s8b3v"/><path class="v5jshh2bo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:like2"} {...others} />);
}

export default Component;
