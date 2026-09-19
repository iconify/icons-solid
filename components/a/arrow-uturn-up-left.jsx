import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp8wsbcdl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xp8wsbcdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:arrow-uturn-up-left"} {...others} />);
}

export default Component;
