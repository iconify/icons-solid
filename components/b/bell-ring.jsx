import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lskuoqb9g.css';
import '../../css/c/c5bqli6yp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="lskuoqb9g"/><path class="c5bqli6yp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-ring"} {...others} />);
}

export default Component;
