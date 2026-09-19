import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q2fcctxvx.css';
import '../../css/o/oiytrebzc.css';
import '../../css/z/z1srs-9rs.css';
import '../../css/i/irkglzlhc.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q2fcctxvx"/><path class="oiytrebzc"/><path class="z1srs-9rs"/><path class="irkglzlhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ly"} {...others} />);
}

export default Component;
