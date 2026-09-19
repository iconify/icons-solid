import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n14ga01-u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n14ga01-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:manual-meat-grinder"} {...others} />);
}

export default Component;
