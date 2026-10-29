import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6k26uktb.css';
import '../../css/x/xay746b5q.css';
import '../../css/w/w-h96getf.css';
import '../../css/i/im5kqc72c.css';
import '../../css/b/bmggswb5u.css';
import '../../css/v/v6hcw5tmy.css';
import '../../css/j/js4rxvhhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6k26uktb wm-shadow"/><path class="wm-k xay746b5q"/><path class="w-h96getf wm-k"/><path class="im5kqc72c wm-k"/><path class="bmggswb5u wm-k"/><path class="v6hcw5tmy wm-k"/><path class="js4rxvhhq wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:zap"} {...others} />);
}

export default Component;
