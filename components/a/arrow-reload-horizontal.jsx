import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ufcnjp-rr.css';
import '../../css/b/bcexqtb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ufcnjp-rr"/><path class="bcexqtb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-reload-horizontal"} {...others} />);
}

export default Component;
