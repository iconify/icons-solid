import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g18k1pb8p.css';
import '../../css/s/s4_j3-_9s.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g18k1pb8p"/><path class="s4_j3-_9s"/><path class="i7sr6ubzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:image-solid"} {...others} />);
}

export default Component;
