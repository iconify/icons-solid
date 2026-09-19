import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5m7rab3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r5m7rab3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:scuba-mask"} {...others} />);
}

export default Component;
