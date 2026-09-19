import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqi0klb5s.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="oqi0klb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:one-of-characters-mahjong"} {...others} />);
}

export default Component;
