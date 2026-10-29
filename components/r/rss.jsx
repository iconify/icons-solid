import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gwv71ubhn.css';
import '../../css/o/okjzr1tkj.css';
import '../../css/o/ocosfvbzp.css';
import '../../css/x/x4z7n9bfn.css';
import '../../css/q/qiourcbsz.css';
import '../../css/a/aybnwhbbb.css';
import '../../css/l/l53lok9ux.css';
import '../../css/y/ytqn3q3es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gwv71ubhn wm-shadow"/><path class="okjzr1tkj"/><path class="ocosfvbzp"/><path class="x4z7n9bfn"/><path class="qiourcbsz"/><path class="aybnwhbbb"/><path class="l53lok9ux wm-shine"/><path class="wm-deco ytqn3q3es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rss"} {...others} />);
}

export default Component;
