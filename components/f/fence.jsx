import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/epokgjbrc.css';
import '../../css/r/rtg5wwmrv.css';
import '../../css/n/nvj7pabfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="epokgjbrc wm-shadow"/><path class="rtg5wwmrv wm-shadow"/><path class="nvj7pabfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fence"} {...others} />);
}

export default Component;
