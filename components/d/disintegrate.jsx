import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p93ebq0sl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p93ebq0sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:disintegrate"} {...others} />);
}

export default Component;
