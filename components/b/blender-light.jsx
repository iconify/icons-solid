import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/d/dfzz3w77i.css';
import '../../css/p/pupt13zxe.css';
import '../../css/o/oj9-3vb9h.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="dfzz3w77i"/><path class="pupt13zxe"/><path class="oj9-3vb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:blender-light"} {...others} />);
}

export default Component;
