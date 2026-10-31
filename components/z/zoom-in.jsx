import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/g/gvl5rbbth.css';
import '../../css/w/wiqa8r46t.css';
import '../../css/i/i5uzbo25u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="gvl5rbbth wm-shadow"/><path class="wiqa8r46t"/><path class="i5uzbo25u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:zoom-in"} {...others} />);
}

export default Component;
