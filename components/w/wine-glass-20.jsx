import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2g-f1blp.css';
import '../../css/w/wut29u08z.css';
import '../../css/x/x1osh-brd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u2g-f1blp"/><path class="wut29u08z"/><path class="x1osh-brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-glass-20"} {...others} />);
}

export default Component;
