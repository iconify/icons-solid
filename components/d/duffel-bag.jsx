import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1od96b5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h1od96b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:duffel-bag"} {...others} />);
}

export default Component;
