import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/safs953tl.css';
import '../../css/l/lpb7-yq0f.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="safs953tl"/><path class="lpb7-yq0f"/><path class="tz_5mvbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:web-services-service"} {...others} />);
}

export default Component;
