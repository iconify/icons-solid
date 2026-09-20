import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl4cnrbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hl4cnrbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:parent-line"} {...others} />);
}

export default Component;
