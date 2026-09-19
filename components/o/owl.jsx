import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/analhzb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="analhzb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:owl"} {...others} />);
}

export default Component;
