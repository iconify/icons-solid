import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8-dq_bjg.css';
import '../../css/c/clzmf1wqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v8-dq_bjg"/><path class="clzmf1wqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-flash"} {...others} />);
}

export default Component;
