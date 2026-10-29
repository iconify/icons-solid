import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o41q9kq7g.css';
import '../../css/j/j_i6_dbmq.css';
import '../../css/k/kzbsc1b0y.css';
import '../../css/y/ylyu3o1hk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o41q9kq7g wm-k"/><path class="j_i6_dbmq wm-k"/><path class="kzbsc1b0y wm-k"/><path class="wm-s ylyu3o1hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bell-off"} {...others} />);
}

export default Component;
