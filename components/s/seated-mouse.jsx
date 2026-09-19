import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7wjn1b-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n7wjn1b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:seated-mouse"} {...others} />);
}

export default Component;
