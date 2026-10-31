import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ig1a11boh.css';
import '../../css/s/skle_u2dr.css';
import '../../css/q/qy_mz6bbl.css';
import '../../css/a/aulkhebiq.css';
import '../../css/x/xh3a0actj.css';
import '../../css/q/q8-lf6obq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ig1a11boh wm-shadow"/><path class="skle_u2dr wm-shadow"/><path class="qy_mz6bbl"/><path class="aulkhebiq"/><path class="xh3a0actj"/><path class="q8-lf6obq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:database"} {...others} />);
}

export default Component;
