import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glp1ur27k.css';
import '../../css/w/ww5xev0qs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glp1ur27k"/><path class="ww5xev0qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-pulse-2-bold"} {...others} />);
}

export default Component;
