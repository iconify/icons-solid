import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5lan_0sa.css';
import '../../css/s/sep8gme6u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q5lan_0sa"/><path clip-rule="evenodd" class="sep8gme6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:tablet-16"} {...others} />);
}

export default Component;
