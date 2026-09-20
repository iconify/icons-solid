import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhjf_188e.css';
import '../../css/b/b3t0rlnfz.css';
import '../../css/d/d_yf9z9fk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhjf_188e"/><path class="b3t0rlnfz"/><path class="d_yf9z9fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:map-direction"} {...others} />);
}

export default Component;
