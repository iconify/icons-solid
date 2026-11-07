import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2kojulcs.css';
import '../../css/z/zq58fob3q.css';
import '../../css/c/crhe8uk-o.css';
import '../../css/i/inmzidb8g.css';
import '../../css/i/iw_llbnvw.css';
import '../../css/q/q5kqmensf.css';
import '../../css/i/idvxtzbdf.css';
import '../../css/w/wg4albb_j.css';
import '../../css/i/iukn37-2x.css';
import '../../css/b/b9zln9bwi.css';
import '../../css/j/jsb7oqdhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2kojulcs"/><path class="zq58fob3q"/><path class="crhe8uk-o"/><path class="inmzidb8g"/><path class="iw_llbnvw"/><path class="q5kqmensf"/><path class="idvxtzbdf"/><path class="wg4albb_j"/><path class="iukn37-2x"/><path class="b9zln9bwi"/><path class="jsb7oqdhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tennis-2-bold-duotone"} {...others} />);
}

export default Component;
