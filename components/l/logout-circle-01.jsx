import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/itwxckbzh.css';
import '../../css/j/jitlzy2ih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="itwxckbzh"/><path class="jitlzy2ih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:logout-circle-01"} {...others} />);
}

export default Component;
