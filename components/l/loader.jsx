import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms5-ntotx.css';
import '../../css/s/s3l-i3nyz.css';
import '../../css/e/evbbf8bxp.css';
import '../../css/w/wplu9ikca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms5-ntotx wm-k"/><path class="s3l-i3nyz wm-a"/><path class="evbbf8bxp wm-a"/><path class="wm-a wplu9ikca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:loader"} {...others} />);
}

export default Component;
