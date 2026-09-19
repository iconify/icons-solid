import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i00-uxbzk.css';
import '../../css/v/vp7a-_8gf.css';
import '../../css/u/uknsv7bvj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i00-uxbzk"/><path class="vp7a-_8gf"/><path class="uknsv7bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:share-sys"} {...others} />);
}

export default Component;
