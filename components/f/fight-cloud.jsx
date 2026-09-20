import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/o/o2l9vwbvo.css';
import '../../css/x/xt60nzb_z.css';
import '../../css/u/uwedcpk8f.css';
import '../../css/f/f4b2b5b0y.css';
import '../../css/u/u2za_nb9z.css';
import '../../css/j/jkozvacze.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/r2ch53yhc.css';
import '../../css/j/jabjai4fg.css';
import '../../css/i/ittlynbqx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><path class="o2l9vwbvo"/><path class="xt60nzb_z"/></g><path class="uwedcpk8f"/><path class="f4b2b5b0y"/><path class="u2za_nb9z"/><path class="jkozvacze"/><g class="jn8qy4bru"><path class="r2ch53yhc"/><path class="jabjai4fg"/><path class="ittlynbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fight-cloud"} {...others} />);
}

export default Component;
