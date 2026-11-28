import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk8pohd4d.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="yk8pohd4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:text-wrap-bold"} {...others} />);
}

export default Component;
