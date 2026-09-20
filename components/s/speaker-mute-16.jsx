import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-s4f8x0t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a-s4f8x0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:speaker-mute-16"} {...others} />);
}

export default Component;
