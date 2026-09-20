import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iq63t9bev.css';
import '../../css/g/ge-4pttkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iq63t9bev"/><path class="ge-4pttkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lock-unlock-4"} {...others} />);
}

export default Component;
