import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj208ackd.css';
import '../../css/r/r_67kbawa.css';
import '../../css/q/qlene92hf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yj208ackd"/><path class="r_67kbawa"/><path class="qlene92hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-waves-stroke-20"} {...others} />);
}

export default Component;
