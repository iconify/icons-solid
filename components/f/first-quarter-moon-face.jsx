import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sivoj0w8q.css';
import '../../css/e/elrbtbb3y.css';
import '../../css/d/d8ofhabtj.css';
import '../../css/l/lcughdu_g.css';
import '../../css/z/z17_pxbxr.css';
import '../../css/x/xtekaw03g.css';
import '../../css/e/elx29ub9f.css';
import '../../css/n/nvdgyd5pr.css';
import '../../css/s/sd43n6hgm.css';
import '../../css/r/rnoz56bhe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sivoj0w8q"/><path class="elrbtbb3y"/><path class="d8ofhabtj"/><path class="lcughdu_g"/><path class="z17_pxbxr"/><path class="xtekaw03g"/><path class="elx29ub9f"/><path class="nvdgyd5pr"/><path class="sd43n6hgm"/><path class="rnoz56bhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:first-quarter-moon-face"} {...others} />);
}

export default Component;
