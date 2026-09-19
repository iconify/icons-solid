import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pllr1xbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pllr1xbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:xt2-camera"} {...others} />);
}

export default Component;
