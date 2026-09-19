import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozw9cgbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozw9cgbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:gce-systems-management"} {...others} />);
}

export default Component;
