import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aop5c88re.css';
import '../../css/p/phbl4obbj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="aop5c88re"/><path class="phbl4obbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-1-duo"} {...others} />);
}

export default Component;
