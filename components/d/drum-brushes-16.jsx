import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4z_23_9n.css';
import '../../css/w/w40fbby0g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="z4z_23_9n"/><path class="w40fbby0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:drum-brushes-16"} {...others} />);
}

export default Component;
