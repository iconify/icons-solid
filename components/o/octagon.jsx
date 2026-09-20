import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe5r8nmyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe5r8nmyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:octagon"} {...others} />);
}

export default Component;
