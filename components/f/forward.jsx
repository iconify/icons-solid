import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-5cmdb4d.css';
import '../../css/w/wj6tl_raq.css';
import '../../css/l/l2fzk2vch.css';
import '../../css/z/zxqt7_b-c.css';
import '../../css/y/yyamsub-m.css';
import '../../css/n/nczc14nyo.css';
import '../../css/z/zsazf-piq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-5cmdb4d wm-shadow"/><path class="wj6tl_raq wm-k"/><path class="l2fzk2vch wm-k"/><path class="wm-k zxqt7_b-c"/><path class="wm-k yyamsub-m"/><path class="nczc14nyo wm-k"/><path class="wm-shine zsazf-piq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:forward"} {...others} />);
}

export default Component;
