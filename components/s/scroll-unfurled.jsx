import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts_8b5bly.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ts_8b5bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:scroll-unfurled"} {...others} />);
}

export default Component;
