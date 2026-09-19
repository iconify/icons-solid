import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzhd2pbal.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fzhd2pbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:one-of-bamboos-mahjong-ss02"} {...others} />);
}

export default Component;
