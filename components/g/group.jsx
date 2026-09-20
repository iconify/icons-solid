import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yiyl2y67k.css';
import '../../css/u/u_fnnvbro.css';
import '../../css/j/j-rnvbj5k.css';
import '../../css/f/feb0qrb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yiyl2y67k"/><path class="u_fnnvbro"/><path class="j-rnvbj5k"/><path class="feb0qrb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:group"} {...others} />);
}

export default Component;
