import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/v/vlulgsbdg.css';
import '../../css/m/mvb1mnblt.css';
import '../../css/f/fz-dd5bhs.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="vlulgsbdg"/><path clip-rule="evenodd" class="mvb1mnblt"/><path clip-rule="evenodd" class="fz-dd5bhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:scala-light"} {...others} />);
}

export default Component;
