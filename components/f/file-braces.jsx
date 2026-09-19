import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h7n5_ebdc.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h7n5_ebdc"/><path class="ykzxdyblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-braces"} {...others} />);
}

export default Component;
