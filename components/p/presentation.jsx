import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xa0d53bhh.css';
import '../../css/t/ttkzv_ptx.css';
import '../../css/d/dk_58dbet.css';
import '../../css/a/ar718pbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xa0d53bhh"/><path class="ttkzv_ptx wm-shadow"/><path class="dk_58dbet"/><path class="ar718pbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:presentation"} {...others} />);
}

export default Component;
