import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti4-m668c.css';
import '../../css/t/tx91pulpy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="ti4-m668c"/><path class="tx91pulpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:swords"} {...others} />);
}

export default Component;
