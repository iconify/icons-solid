import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yzb2trbdq.css';
import '../../css/w/wo9q6gbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yzb2trbdq"/><path class="wo9q6gbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:adzan"} {...others} />);
}

export default Component;
