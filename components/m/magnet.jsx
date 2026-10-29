import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2q1i3bkb.css';
import '../../css/n/nvgz7z71r.css';
import '../../css/v/vm0f_zibb.css';
import '../../css/p/pkfb3qiwy.css';
import '../../css/v/vt-phz1qk.css';
import '../../css/a/apbrzvf8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2q1i3bkb wm-k"/><path class="nvgz7z71r wm-k"/><path class="vm0f_zibb wm-k"/><path class="pkfb3qiwy wm-k"/><path class="vt-phz1qk wm-shine"/><path class="apbrzvf8p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:magnet"} {...others} />);
}

export default Component;
