import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/enhlbr_bf.css';
import '../../css/u/ujgtwhupj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="enhlbr_bf"/><path class="ujgtwhupj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:viber"} {...others} />);
}

export default Component;
