import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ubzrr3byh.css';
import '../../css/t/tgiwabbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ubzrr3byh"/><path class="tgiwabbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-magic-selection-02"} {...others} />);
}

export default Component;
