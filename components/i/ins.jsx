import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gky7xcbgs.css';
import '../../css/d/d26v317vg.css';
import '../../css/r/rz833ubgc.css';
import '../../css/f/fg974bc0y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="gky7xcbgs"/><g class="d26v317vg"><path class="rz833ubgc"/><path class="fg974bc0y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ins"} {...others} />);
}

export default Component;
