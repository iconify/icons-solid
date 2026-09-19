import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvbr56bhx.css';
import '../../css/x/x8w1p98rx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tvbr56bhx"/><path class="x8w1p98rx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-lock"} {...others} />);
}

export default Component;
