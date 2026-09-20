import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yct52e2ky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yct52e2ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:smashing-magazine"} {...others} />);
}

export default Component;
