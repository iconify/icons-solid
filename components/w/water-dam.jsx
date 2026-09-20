import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k21razc9o.css';
import '../../css/b/bsrwgvb7l.css';
import '../../css/h/h3ejo2vtm.css';
import '../../css/h/hbg1lt-er.css';
import '../../css/b/b2mv9isoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k21razc9o"/><path class="bsrwgvb7l"/><path class="h3ejo2vtm"/><path class="hbg1lt-er"/><path class="b2mv9isoi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:water-dam"} {...others} />);
}

export default Component;
