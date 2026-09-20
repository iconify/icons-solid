import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su9dknbed.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-xlr_blp.css';
import '../../css/b/bgg_hqo-b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGKxcyRbQG" class="su9dknbed"/></defs><g class="ft5dv1b6b"><path class="k-xlr_blp"/><use href="#SVGKxcyRbQG"/><path class="bgg_hqo-b"/><use href="#SVGKxcyRbQG"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-export-solid"} {...others} />);
}

export default Component;
