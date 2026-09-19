import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyr4js4ub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lyr4js4ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:snitch-quidditch-ball"} {...others} />);
}

export default Component;
