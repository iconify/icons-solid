import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hexptijfy.css';
import '../../css/z/z2ndrkukc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hexptijfy"/><path class="z2ndrkukc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:banknote-arrow-down"} {...others} />);
}

export default Component;
