import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbugvpboz.css';
import '../../css/w/wr4hlrpkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bbugvpboz"/><path class="wr4hlrpkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-chat-01"} {...others} />);
}

export default Component;
