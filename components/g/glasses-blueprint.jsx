import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a5i21bbjm.css';
import '../../css/s/szpe6lbij.css';
import '../../css/g/gbdh5hbbq.css';
import '../../css/w/w9hdm4bem.css';
import '../../css/u/uo-rcgb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="a5i21bbjm wm-deco"/><path class="szpe6lbij wm-deco"/><path class="gbdh5hbbq wm-k"/><path class="w9hdm4bem wm-k"/><path class="uo-rcgb9q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glasses-blueprint"} {...others} />);
}

export default Component;
