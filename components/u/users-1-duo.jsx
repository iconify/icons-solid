import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acsrd_b0q.css';
import '../../css/e/e0u7ijb0l.css';
import '../../css/n/nj7wxyulw.css';
import '../../css/e/euq9bux1b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="acsrd_b0q"/><path class="e0u7ijb0l"/><path class="nj7wxyulw"/><path class="euq9bux1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:users-1-duo"} {...others} />);
}

export default Component;
