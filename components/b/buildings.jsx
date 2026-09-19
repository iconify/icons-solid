import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxn26ubua.css';
import '../../css/i/inhewssvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxn26ubua"/><path class="inhewssvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:buildings"} {...others} />);
}

export default Component;
