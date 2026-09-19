import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fxzlzb8ls.css';
import '../../css/m/m9dcbllck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fxzlzb8ls"/><path class="m9dcbllck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:printer"} {...others} />);
}

export default Component;
