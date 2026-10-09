import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uckaycc9t.css';
import '../../css/t/t170-qrdh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uckaycc9t"/><path class="t170-qrdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settings-20"} {...others} />);
}

export default Component;
