import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xjx4jsz_i.css';
import '../../css/v/vcnkk595l.css';
import '../../css/k/kzbjxkbod.css';
import '../../css/o/osmm_9hor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xjx4jsz_i"/><path class="vcnkk595l wm-shadow"/><path class="kzbjxkbod"/><path class="osmm_9hor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:unlock"} {...others} />);
}

export default Component;
