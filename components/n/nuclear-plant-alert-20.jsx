import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ily569bri.css';
import '../../css/w/wegqv6blc.css';
import '../../css/z/zc5158bqp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ily569bri"/><path class="wegqv6blc"/><path class="zc5158bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-alert-20"} {...others} />);
}

export default Component;
