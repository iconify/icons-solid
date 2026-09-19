import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptvz3z25y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ptvz3z25y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:card-5-hearts"} {...others} />);
}

export default Component;
