import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohx_6lg8q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ohx_6lg8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:forest-entrance"} {...others} />);
}

export default Component;
