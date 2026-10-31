import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/laiauramu.css';
import '../../css/q/quk-34b0j.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/l/l3ffq6ben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="laiauramu wm-shadow"/><path class="quk-34b0j wm-shadow"/><path class="cvpr-5bot"/><path class="l3ffq6ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:panel-left-close"} {...others} />);
}

export default Component;
