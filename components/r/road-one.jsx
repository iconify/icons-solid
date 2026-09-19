import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e8x5_pbxr.css';
import '../../css/t/tffebiuna.css';
import '../../css/x/xxdy1esez.css';
import '../../css/b/b04cps37t.css';
import '../../css/s/s1s0qacfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="e8x5_pbxr"/><path class="tffebiuna"/><path class="xxdy1esez"/><path class="b04cps37t"/><path class="s1s0qacfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:road-one"} {...others} />);
}

export default Component;
