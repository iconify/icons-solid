import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur7o7bbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ur7o7bbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-phase-0"} {...others} />);
}

export default Component;
