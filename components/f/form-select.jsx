import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yrmh38esi.css';
import '../../css/t/tz5dcn39z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yrmh38esi"/><path class="tz5dcn39z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:form-select"} {...others} />);
}

export default Component;
