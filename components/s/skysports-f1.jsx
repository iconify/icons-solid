import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmsss6jrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmsss6jrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:skysports-f1"} {...others} />);
}

export default Component;
