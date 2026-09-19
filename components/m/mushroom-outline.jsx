import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g-roh6blq.css';
import '../../css/p/plb01ybpw.css';
import '../../css/v/v74qb470j.css';
import '../../css/r/risyq2_-f.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g-roh6blq"/><path class="plb01ybpw"/><path class="v74qb470j"/><path class="risyq2_-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mushroom-outline"} {...others} />);
}

export default Component;
