import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdl-6zbdg.css';
import '../../css/w/w6se-gehu.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vdl-6zbdg"/><path class="w6se-gehu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-radiology"} {...others} />);
}

export default Component;
