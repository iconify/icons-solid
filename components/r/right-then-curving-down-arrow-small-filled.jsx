import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdpb0ccux.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="sdpb0ccux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-then-curving-down-arrow-small-filled"} {...others} />);
}

export default Component;
