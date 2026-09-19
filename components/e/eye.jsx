import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aprbvlbti.css';
import '../../css/o/oclsbd5zw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="aprbvlbti"/><circle class="oclsbd5zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:eye"} {...others} />);
}

export default Component;
