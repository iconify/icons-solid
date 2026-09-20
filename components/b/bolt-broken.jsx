import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rck6_bd7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rck6_bd7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bolt-broken"} {...others} />);
}

export default Component;
