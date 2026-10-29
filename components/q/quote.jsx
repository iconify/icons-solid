import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8qqnyamh.css';
import '../../css/h/h5ik3tjbp.css';
import '../../css/e/er9a2snoh.css';
import '../../css/a/abdyue0py.css';
import '../../css/l/lt-tfgbxh.css';
import '../../css/x/xd9slw4_i.css';
import '../../css/u/udkxqlbpb.css';
import '../../css/k/kagfa5b7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s8qqnyamh wm-k"/><path class="h5ik3tjbp wm-k"/><path class="er9a2snoh wm-k"/><path class="abdyue0py wm-shine"/><path class="lt-tfgbxh wm-k"/><path class="wm-k xd9slw4_i"/><path class="udkxqlbpb wm-k"/><path class="kagfa5b7o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:quote"} {...others} />);
}

export default Component;
