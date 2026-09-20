import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn1q_6bnm.css';
import '../../css/y/ykjfk6v1j.css';
import '../../css/y/y1om2457k.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wn1q_6bnm"/><path class="ykjfk6v1j"/><path class="y1om2457k"/><path class="uymgdabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-down-1"} {...others} />);
}

export default Component;
