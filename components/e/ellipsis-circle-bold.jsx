import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h39n9xbvk.css';
import '../../css/h/hz82di4ei.css';
import '../../css/b/b5r2-9b9m.css';
import '../../css/i/i2uebbkhw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="h39n9xbvk"/><rect class="hz82di4ei"/><rect class="b5r2-9b9m"/><rect class="i2uebbkhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-circle-bold"} {...others} />);
}

export default Component;
