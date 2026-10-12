import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6cnbey4s.css';
import '../../css/m/mr7yfcs-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r6cnbey4s"/><path class="mr7yfcs-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wifi-low"} {...others} />);
}

export default Component;
