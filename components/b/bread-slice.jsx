import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cdy9f-bjt.css';
import '../../css/o/oh0vtb84n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cdy9f-bjt"/><path class="oh0vtb84n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bread-slice"} {...others} />);
}

export default Component;
