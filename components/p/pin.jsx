import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9hgmvb7t.css';
import '../../css/e/e7_fkdg6h.css';
import '../../css/u/u-dah0ber.css';
import '../../css/k/kw0hxobrw.css';
import '../../css/m/m06bw68wf.css';
import '../../css/j/j-j7trbyk.css';
import '../../css/g/gg6v77bnl.css';
import '../../css/n/nxs3tv-0d.css';
import '../../css/e/ef7i-2bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9hgmvb7t wm-shadow"/><path class="e7_fkdg6h wm-k"/><path class="u-dah0ber wm-k"/><path class="kw0hxobrw wm-k"/><path class="m06bw68wf wm-k"/><path class="j-j7trbyk wm-k"/><path class="gg6v77bnl wm-shine"/><path class="nxs3tv-0d wm-a"/><path class="ef7i-2bpl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pin"} {...others} />);
}

export default Component;
