import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx7h1gakz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sx7h1gakz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:boar-tusks"} {...others} />);
}

export default Component;
