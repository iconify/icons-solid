import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/toja6ircy.css';
import '../../css/d/dff-7ub2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="toja6ircy"/><path class="dff-7ub2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-image-edit"} {...others} />);
}

export default Component;
