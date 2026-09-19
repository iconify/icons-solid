import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv1xkviab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mv1xkviab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:no-meeting-room"} {...others} />);
}

export default Component;
