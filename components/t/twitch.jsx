import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhzhsy8bt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nhzhsy8bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:twitch"} {...others} />);
}

export default Component;
