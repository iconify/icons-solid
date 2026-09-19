import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3lmyibhh.css';
import '../../css/o/os5ijcyib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c3lmyibhh"/><path class="os5ijcyib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-unlock-01"} {...others} />);
}

export default Component;
