import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx6s3u3tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mx6s3u3tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chalkboard"} {...others} />);
}

export default Component;
