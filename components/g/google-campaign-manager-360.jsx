import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxpv5-bhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxpv5-bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:google-campaign-manager-360"} {...others} />);
}

export default Component;
