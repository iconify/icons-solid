import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i47aozb0e.css';
import '../../css/w/wcdq8xt5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i47aozb0e"/><path class="wcdq8xt5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sclp"} {...others} />);
}

export default Component;
