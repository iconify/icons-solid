import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0b83e9ne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0b83e9ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:phone-in-talk-outline"} {...others} />);
}

export default Component;
