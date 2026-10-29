import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9twa0baz.css';
import '../../css/l/l441w_p8n.css';
import '../../css/t/tg_1rbbjh.css';
import '../../css/f/fasc0-2ar.css';
import '../../css/c/cfdzbqo4q.css';
import '../../css/q/q8iw2nmrz.css';
import '../../css/t/ty7a9dbgf.css';
import '../../css/v/v9xafab-k.css';
import '../../css/g/gppwpjbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9twa0baz wm-shadow"/><path class="l441w_p8n wm-k"/><path class="tg_1rbbjh wm-k"/><path class="fasc0-2ar wm-k"/><path class="cfdzbqo4q wm-k"/><path class="q8iw2nmrz wm-shine"/><path class="ty7a9dbgf wm-k"/><path class="v9xafab-k wm-k"/><path class="gppwpjbkk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:container"} {...others} />);
}

export default Component;
