import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjc38d2gm.css';
import '../../css/v/v1ewclboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kjc38d2gm"/><path class="v1ewclboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:protection-mask"} {...others} />);
}

export default Component;
