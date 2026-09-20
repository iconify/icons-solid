import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjznjrqwa.css';
import '../../css/s/s-niwacno.css';
import '../../css/s/slnnvlwbq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/slcqv0xey.css';
import '../../css/c/cg5t8p9ca.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sjznjrqwa"/><path class="s-niwacno"/><path class="slnnvlwbq"/><g class="jn8qy4bru"><path class="slcqv0xey"/><path class="cg5t8p9ca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:placard"} {...others} />);
}

export default Component;
