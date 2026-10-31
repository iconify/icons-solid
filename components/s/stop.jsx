import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r78-4rbba.css';
import '../../css/s/swkdn-bfv.css';
import '../../css/b/b62ic8bgu.css';
import '../../css/f/fytbxtoad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r78-4rbba wm-shadow"/><path class="swkdn-bfv wm-shadow"/><path class="b62ic8bgu"/><path class="fytbxtoad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:stop"} {...others} />);
}

export default Component;
