import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzvr72bgj.css';
import '../../css/b/bn3wwcchr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mzvr72bgj"/><path class="bn3wwcchr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-20"} {...others} />);
}

export default Component;
