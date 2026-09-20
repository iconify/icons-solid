import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh602ub6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gh602ub6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:picture-in-picture-bottom-right-outline"} {...others} />);
}

export default Component;
