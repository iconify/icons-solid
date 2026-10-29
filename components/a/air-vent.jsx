import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlviv5igk.css';
import '../../css/r/rnbh5jawp.css';
import '../../css/i/i06_1rjmg.css';
import '../../css/e/eckufja1x.css';
import '../../css/s/s8iefrb1r.css';
import '../../css/w/wup5elbet.css';
import '../../css/m/mn6px7jds.css';
import '../../css/d/d0bwh8iju.css';
import '../../css/c/cj0utoboo.css';
import '../../css/r/r8zyz-bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlviv5igk wm-shadow"/><path class="rnbh5jawp wm-k"/><path class="i06_1rjmg wm-k"/><path class="eckufja1x wm-k"/><path class="s8iefrb1r wm-k"/><path class="wm-k wup5elbet"/><path class="mn6px7jds wm-shine"/><path class="d0bwh8iju wm-a"/><path class="cj0utoboo wm-a"/><path class="r8zyz-bxa wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:air-vent"} {...others} />);
}

export default Component;
