import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uan11fboz.css';
import '../../css/n/ng3jq3bxr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uan11fboz"/><path class="ng3jq3bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:luna-dashboard"} {...others} />);
}

export default Component;
