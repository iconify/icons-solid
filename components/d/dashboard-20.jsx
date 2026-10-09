import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyrpv8pvm.css';
import '../../css/o/o8g693dbn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zyrpv8pvm"/><path class="o8g693dbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dashboard-20"} {...others} />);
}

export default Component;
