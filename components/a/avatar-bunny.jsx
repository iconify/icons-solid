import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rew12ibrb.css';
import '../../css/p/p5h09mb4q.css';
import '../../css/i/in5rf9n_o.css';
import '../../css/k/kzbeqwbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rew12ibrb wm-shadow"/><path class="p5h09mb4q wm-shadow"/><path class="in5rf9n_o"/><path class="kzbeqwbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-bunny"} {...others} />);
}

export default Component;
