import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la_p4fnuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la_p4fnuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:garage-lock"} {...others} />);
}

export default Component;
