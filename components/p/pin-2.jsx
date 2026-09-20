import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ng42l8jdq.css';
import '../../css/z/zwl2stbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ng42l8jdq"/><path class="zwl2stbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pin-2"} {...others} />);
}

export default Component;
