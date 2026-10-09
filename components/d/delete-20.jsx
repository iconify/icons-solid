import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2pyevbzu.css';
import '../../css/n/n4-5ir_js.css';
import '../../css/m/maa-xwdby.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g2pyevbzu"/><path class="n4-5ir_js"/><path class="maa-xwdby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delete-20"} {...others} />);
}

export default Component;
