import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywkb_ub8z.css';
import '../../css/o/ob4rv7bsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywkb_ub8z"/><path class="ob4rv7bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-incoming-02"} {...others} />);
}

export default Component;
