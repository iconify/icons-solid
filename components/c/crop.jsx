import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h4669-b9d.css';
import '../../css/q/q6_efx1zn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="h4669-b9d"/><path class="q6_efx1zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:crop"} {...others} />);
}

export default Component;
