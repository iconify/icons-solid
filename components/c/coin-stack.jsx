import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1yrmrb5y.css';
import '../../css/j/j3a5w_u7c.css';
import '../../css/t/tyk_embkd.css';
import '../../css/j/jnndmrrof.css';
import '../../css/t/tj4twqsnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e1yrmrb5y"/><path class="j3a5w_u7c"/><path class="tyk_embkd"/><path class="jnndmrrof"/><path class="tj4twqsnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:coin-stack"} {...others} />);
}

export default Component;
