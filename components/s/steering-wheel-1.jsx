import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed-oxac1r.css';
import '../../css/w/w5ez1ccqf.css';
import '../../css/s/s0_5dd8qk.css';
import '../../css/h/h19c08bjb.css';
import '../../css/b/b9zutj2hp.css';
import '../../css/b/b9z6ccc5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ed-oxac1r"/><path class="w5ez1ccqf"/><path class="s0_5dd8qk"/><path class="h19c08bjb"/><path class="b9zutj2hp"/><path class="b9z6ccc5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:steering-wheel-1"} {...others} />);
}

export default Component;
