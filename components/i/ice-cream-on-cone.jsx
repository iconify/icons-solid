import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isgk0lbhg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="isgk0lbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ice-cream-on-cone"} {...others} />);
}

export default Component;
