import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffww1eb2m.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x2ylpqyvn.css';
import '../../css/b/bn-8nobfm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ffww1eb2m"/><g class="jn8qy4bru"><path class="x2ylpqyvn"/><path class="bn-8nobfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:narwhal"} {...others} />);
}

export default Component;
