import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1wyn0pqb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a1wyn0pqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:high-kick"} {...others} />);
}

export default Component;
