import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxfe_ublk.css';
import '../../css/u/u-5087bul.css';
import '../../css/y/yn4kitb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxfe_ublk"/><path class="u-5087bul"/><path clip-rule="evenodd" class="yn4kitb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:gauge-1"} {...others} />);
}

export default Component;
