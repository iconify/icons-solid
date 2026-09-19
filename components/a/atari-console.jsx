import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp1t8_mkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp1t8_mkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:atari-console"} {...others} />);
}

export default Component;
