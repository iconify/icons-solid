import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9drbtbgy.css';
import '../../css/w/wzc5z4bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k9drbtbgy"/><path class="wzc5z4bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-secure-02"} {...others} />);
}

export default Component;
