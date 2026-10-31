import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zsm71cojq.css';
import '../../css/b/btawavbys.css';
import '../../css/h/ha-6yibsf.css';
import '../../css/k/k26yyvc5e.css';
import '../../css/n/ndax5gb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zsm71cojq"/><path class="btawavbys wm-shine"/><path class="ha-6yibsf wm-k"/><path class="k26yyvc5e wm-a"/><path class="ndax5gb4u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:footprints"} {...others} />);
}

export default Component;
