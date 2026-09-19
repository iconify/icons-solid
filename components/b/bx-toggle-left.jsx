import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4xiqk_0v.css';
import '../../css/o/oo004ivrh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4xiqk_0v"/><path class="oo004ivrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-toggle-left"} {...others} />);
}

export default Component;
