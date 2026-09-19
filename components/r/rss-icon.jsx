import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m20auyf3s.css';

const viewBox = {"width":432,"height":472};
const content = `<path class="m20auyf3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:rss-icon"} {...others} />);
}

export default Component;
