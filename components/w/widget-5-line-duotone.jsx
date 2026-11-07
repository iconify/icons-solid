import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j9cji8llp.css';
import '../../css/r/r01r-3bes.css';
import '../../css/r/r7eg7804v.css';
import '../../css/o/oxhswy3oh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j9cji8llp"/><path class="r01r-3bes"/><path class="r7eg7804v"/><path class="oxhswy3oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-line-duotone"} {...others} />);
}

export default Component;
