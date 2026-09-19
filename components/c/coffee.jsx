import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6dgvcb0v.css';
import '../../css/f/fcvp3_bsk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="v6dgvcb0v"/><path class="fcvp3_bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:coffee"} {...others} />);
}

export default Component;
