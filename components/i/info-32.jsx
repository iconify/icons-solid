import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tweml3g7s.css';
import '../../css/s/sk9-dtbox.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tweml3g7s"/><path clip-rule="evenodd" class="sk9-dtbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:info-32"} {...others} />);
}

export default Component;
