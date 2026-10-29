import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wm1ohb1vk.css';
import '../../css/o/of1fiwsnu.css';
import '../../css/h/hu41ppu9q.css';
import '../../css/g/g0aezibck.css';
import '../../css/m/m4w_cabxb.css';
import '../../css/s/sgwvjcb2c.css';
import '../../css/g/ghd61ssql.css';
import '../../css/i/ib97cfbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wm1ohb1vk"/><path class="of1fiwsnu wm-k"/><path class="hu41ppu9q wm-k"/><path class="g0aezibck wm-k"/><path class="m4w_cabxb wm-k"/><path class="sgwvjcb2c wm-k"/><path class="ghd61ssql wm-shine"/><path class="ib97cfbvs wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:git-commit"} {...others} />);
}

export default Component;
