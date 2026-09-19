import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eq1q1tbgm.css';
import '../../css/h/hp3kc7bgg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="eq1q1tbgm"/><circle class="hp3kc7bgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:search"} {...others} />);
}

export default Component;
