import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adqn4c7sr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="adqn4c7sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:person-in-bed"} {...others} />);
}

export default Component;
