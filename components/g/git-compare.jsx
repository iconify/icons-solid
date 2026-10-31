import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h8nzk_guz.css';
import '../../css/b/bkqngzb1q.css';
import '../../css/r/ra_aqxqxr.css';
import '../../css/e/edus6lapj.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h8nzk_guz"/><path class="bkqngzb1q wm-shine"/><path class="ra_aqxqxr wm-k"/><path class="edus6lapj wm-a"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-compare"} {...others} />);
}

export default Component;
