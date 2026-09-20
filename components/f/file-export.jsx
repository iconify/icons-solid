import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-xlr_blp.css';
import '../../css/s/su9dknbed.css';
import '../../css/b/bgg_hqo-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k-xlr_blp"/><path class="su9dknbed"/><path class="bgg_hqo-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-export"} {...others} />);
}

export default Component;
