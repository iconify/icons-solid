import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx2j-7z0q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sx2j-7z0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:tropical-fish"} {...others} />);
}

export default Component;
