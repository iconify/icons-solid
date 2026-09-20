import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if9l8bejy.css';
import '../../css/m/m0uafebbh.css';
import '../../css/e/eb8mxcbxa.css';
import '../../css/d/dsbbl1wrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="if9l8bejy"/><path class="m0uafebbh"/><path class="eb8mxcbxa"/><path class="dsbbl1wrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:image-file-favorite-heart"} {...others} />);
}

export default Component;
