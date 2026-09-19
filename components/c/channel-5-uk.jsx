import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3rh6sb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3rh6sb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:channel-5-uk"} {...others} />);
}

export default Component;
