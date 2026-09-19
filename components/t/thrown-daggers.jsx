import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unkg-0nfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="unkg-0nfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:thrown-daggers"} {...others} />);
}

export default Component;
