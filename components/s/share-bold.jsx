import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-6e-_5sn.css';
import '../../css/r/rqd7dsn3i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="c-6e-_5sn"/><path class="rqd7dsn3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:share-bold"} {...others} />);
}

export default Component;
