import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiaxfabid.css';
import '../../css/d/dpr9gubjx.css';
import '../../css/x/x0-csbbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wiaxfabid"/><path clip-rule="evenodd" class="dpr9gubjx"/><path class="x0-csbbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:microphone-off-outline"} {...others} />);
}

export default Component;
