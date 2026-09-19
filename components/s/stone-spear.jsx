import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcg2rnyti.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jcg2rnyti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:stone-spear"} {...others} />);
}

export default Component;
