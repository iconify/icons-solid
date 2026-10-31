import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/aoxplkb_u.css';
import '../../css/v/vu9d_bpoq.css';
import '../../css/k/k6q1i4brf.css';
import '../../css/p/pnrbgxb5c.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="aoxplkb_u"/><path class="vu9d_bpoq wm-shine"/><path class="k6q1i4brf wm-k"/><path class="pnrbgxb5c wm-a"/><path class="mrkqmab9s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:broom"} {...others} />);
}

export default Component;
