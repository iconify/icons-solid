import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd8q51bbk.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/r4b51jb_g.css';
import '../../css/h/hkr7_vb7i.css';
import '../../css/x/xwepbfb9b.css';
import '../../css/p/p6osgjbsx.css';
import '../../css/z/z_-u0fisc.css';
import '../../css/r/r66ppemfm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fd8q51bbk"/><path class="jkq7-hbwz"/><path class="r4b51jb_g"/><path class="hkr7_vb7i"/><path class="xwepbfb9b"/><path class="p6osgjbsx"/><path class="z_-u0fisc"/><path class="r66ppemfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wikidata"} {...others} />);
}

export default Component;
