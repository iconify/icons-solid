import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9q4scbtn.css';
import '../../css/k/kzjb2_bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n9q4scbtn"/><path class="kzjb2_bzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:messages-square"} {...others} />);
}

export default Component;
