import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2czy2bks.css';
import '../../css/a/avzganudj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x2czy2bks"/><path class="avzganudj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:news"} {...others} />);
}

export default Component;
