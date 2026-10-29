import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbnkyib7x.css';
import '../../css/v/vyh9hg7-v.css';
import '../../css/v/valuo-bhu.css';
import '../../css/d/d4oz0qbdh.css';
import '../../css/n/n0fonub9o.css';
import '../../css/z/z9wzycctl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qbnkyib7x wm-k"/><path class="vyh9hg7-v wm-k"/><path class="valuo-bhu wm-k"/><path class="d4oz0qbdh wm-k"/><path class="n0fonub9o wm-shine"/><path class="wm-a z9wzycctl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cactus"} {...others} />);
}

export default Component;
