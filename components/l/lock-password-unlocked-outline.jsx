import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbujyitcz.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/i/i3ujk8lbt.css';
import '../../css/f/f76vb05cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bbujyitcz"/><path class="jwj5s6brs"/><path class="i3ujk8lbt"/><path clip-rule="evenodd" class="f76vb05cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-outline"} {...others} />);
}

export default Component;
