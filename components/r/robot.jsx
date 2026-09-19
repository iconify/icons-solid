import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xipzorq0a.css';
import '../../css/k/kg6ostb4n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="xipzorq0a"/><path class="kg6ostb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:robot"} {...others} />);
}

export default Component;
