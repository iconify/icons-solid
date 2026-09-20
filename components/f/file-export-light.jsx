import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uki0vkbrr.css';
import '../../css/s/su9dknbed.css';
import '../../css/u/utr_d7_ko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uki0vkbrr"/><path class="su9dknbed"/><path class="utr_d7_ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-export-light"} {...others} />);
}

export default Component;
