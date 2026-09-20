import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7kzsmf7u.css';
import '../../css/s/s9rahug_l.css';
import '../../css/v/vx3hl8b7t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i7kzsmf7u"/><path class="s9rahug_l"/><path class="vx3hl8b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:speaker-16"} {...others} />);
}

export default Component;
