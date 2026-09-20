import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8udhfbrq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w8udhfbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-boarding-steam-train-with-smiling-face-on-railway-track"} {...others} />);
}

export default Component;
