import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqnfig0ya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kqnfig0ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:kitchen-scale"} {...others} />);
}

export default Component;
