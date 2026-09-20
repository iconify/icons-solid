import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lphe4gxwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lphe4gxwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-outline"} {...others} />);
}

export default Component;
