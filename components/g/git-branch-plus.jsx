import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgsq45ngw.css';
import '../../css/v/vb8rssb8w.css';
import '../../css/a/arlyf9ici.css';
import '../../css/r/rw2-4kopo.css';
import '../../css/u/u8cn71brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qgsq45ngw wm-shadow"/><path class="vb8rssb8w wm-shadow"/><path class="arlyf9ici"/><path class="rw2-4kopo"/><path class="u8cn71brg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-branch-plus"} {...others} />);
}

export default Component;
