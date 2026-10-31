import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmpv6gzmm.css';
import '../../css/l/lcvpxub2n.css';
import '../../css/c/c_vej5bor.css';
import '../../css/j/jj7jksbws.css';
import '../../css/d/dndm8xb2l.css';
import '../../css/s/sfnve2blh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jmpv6gzmm wm-k"/><path class="lcvpxub2n wm-deco"/><path class="c_vej5bor wm-k"/><path class="jj7jksbws wm-shadow"/><path class="dndm8xb2l wm-shine"/><path class="sfnve2blh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:cupid-bow"} {...others} />);
}

export default Component;
