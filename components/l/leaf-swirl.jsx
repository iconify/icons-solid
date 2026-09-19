import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w30-vrati.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w30-vrati"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:leaf-swirl"} {...others} />);
}

export default Component;
