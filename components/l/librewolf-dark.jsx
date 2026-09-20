import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xon67ijsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xon67ijsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librewolf-dark"} {...others} />);
}

export default Component;
