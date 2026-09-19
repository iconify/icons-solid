import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m57vhnfot.css';
import '../../css/u/uh_herb_v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="m57vhnfot"/><path class="uh_herb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ont"} {...others} />);
}

export default Component;
