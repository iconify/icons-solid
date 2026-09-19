import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahk1xk91p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ahk1xk91p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:fantasy-flight-games"} {...others} />);
}

export default Component;
