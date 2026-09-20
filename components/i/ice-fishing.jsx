import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th9y1yc-z.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="th9y1yc-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:ice-fishing"} {...others} />);
}

export default Component;
