import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ud20_tc4b.css';
import '../../css/m/moorkb8oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ud20_tc4b"/><path class="moorkb8oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file"} {...others} />);
}

export default Component;
