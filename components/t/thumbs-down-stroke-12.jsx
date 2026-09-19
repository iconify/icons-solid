import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jjx2uec9c.css';
import '../../css/s/suo1febzm.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><path class="jjx2uec9c"/><rect class="suo1febzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:thumbs-down-stroke-12"} {...others} />);
}

export default Component;
