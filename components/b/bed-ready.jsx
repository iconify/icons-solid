import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iy1noznvg.css';
import '../../css/b/blbuf7bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iy1noznvg"/><path class="blbuf7bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bed-ready"} {...others} />);
}

export default Component;
