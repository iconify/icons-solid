import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/is5xql_vk.css';
import '../../css/l/lijw3yxeo.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/l/levrdiinv.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="is5xql_vk"/><path class="lijw3yxeo wm-shine"/><path class="ctjcreb2q wm-k"/><path class="levrdiinv wm-a"/><path class="v96mv4btx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:book-open-text"} {...others} />);
}

export default Component;
