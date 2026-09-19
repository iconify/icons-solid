import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfwb_gbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfwb_gbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lightstrip-tv-alt"} {...others} />);
}

export default Component;
