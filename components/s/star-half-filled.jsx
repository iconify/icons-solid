import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc-b3s.css';
import '../../css/c/chdxye.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc-b3s"/><path class="chdxye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:star-half-filled"} {...others} />);
}

export default Component;
