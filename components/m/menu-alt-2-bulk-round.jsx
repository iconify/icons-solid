import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5jngf2xf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5jngf2xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-2-bulk-round"} {...others} />);
}

export default Component;
