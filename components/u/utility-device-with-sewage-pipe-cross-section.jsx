import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_dkf0bpd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z_dkf0bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:utility-device-with-sewage-pipe-cross-section"} {...others} />);
}

export default Component;
