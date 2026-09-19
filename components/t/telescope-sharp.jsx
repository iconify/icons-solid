import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsgvrfbam.css';
import '../../css/h/h_8zds5nd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rsgvrfbam"/><path class="h_8zds5nd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:telescope-sharp"} {...others} />);
}

export default Component;
