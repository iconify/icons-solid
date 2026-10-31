import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l43khq9vu.css';
import '../../css/b/bkqngzb1q.css';
import '../../css/g/gorsochjg.css';
import '../../css/b/b0q5uxwll.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l43khq9vu"/><path class="bkqngzb1q wm-shine"/><path class="gorsochjg wm-k"/><path class="b0q5uxwll wm-a"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-pull-request-draft"} {...others} />);
}

export default Component;
