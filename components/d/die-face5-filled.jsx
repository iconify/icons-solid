import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3231hb9v.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="s3231hb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:die-face5-filled"} {...others} />);
}

export default Component;
