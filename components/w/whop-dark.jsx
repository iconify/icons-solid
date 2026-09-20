import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_3d0-bbo.css';

const viewBox = {"width":383.2,"height":196.4};
const content = `<path class="s_3d0-bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:whop-dark"} {...others} />);
}

export default Component;
