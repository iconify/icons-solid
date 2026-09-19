import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zifwembjz.css';
import '../../css/r/rbpght8ec.css';
import '../../css/t/t7ns7tbvi.css';
import '../../css/x/x6zc0oj6f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zifwembjz"/><path class="rbpght8ec"/><path class="t7ns7tbvi"/><path class="x6zc0oj6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:handshake-duo"} {...others} />);
}

export default Component;
