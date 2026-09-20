import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnpejlbqu.css';
import '../../css/n/nipb_750s.css';
import '../../css/z/zrz8cqb2h.css';
import '../../css/g/gkdwti2oi.css';
import '../../css/g/gelbxrbtk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fnpejlbqu"/><path class="nipb_750s"/><path class="zrz8cqb2h"/><path class="gkdwti2oi"/><ellipse class="gelbxrbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ct-scan"} {...others} />);
}

export default Component;
