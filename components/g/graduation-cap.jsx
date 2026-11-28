import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo0r8nblx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yo0r8nblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:graduation-cap"} {...others} />);
}

export default Component;
