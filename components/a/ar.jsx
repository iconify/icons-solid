import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt7khlbia.css';
import '../../css/i/ib0lxob6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt7khlbia"/><path class="ib0lxob6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ar"} {...others} />);
}

export default Component;
