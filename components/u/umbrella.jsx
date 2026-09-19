import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pfqpsccul.css';
import '../../css/g/g6ibx2b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pfqpsccul"/><path class="g6ibx2b2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:umbrella"} {...others} />);
}

export default Component;
