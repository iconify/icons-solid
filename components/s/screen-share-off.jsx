import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxk2j9btb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxk2j9btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:screen-share-off"} {...others} />);
}

export default Component;
