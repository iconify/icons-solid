import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btj3do1ta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btj3do1ta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-wireless"} {...others} />);
}

export default Component;
