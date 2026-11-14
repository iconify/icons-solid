import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbugvpboz.css';
import '../../css/b/boxw5abxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bbugvpboz"/><path class="boxw5abxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-chat"} {...others} />);
}

export default Component;
