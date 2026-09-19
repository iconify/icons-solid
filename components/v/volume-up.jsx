import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2lm7d1fb.css';
import '../../css/p/plxuwnb-i.css';
import '../../css/r/rv-ah4_ql.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="w2lm7d1fb"/><path class="plxuwnb-i"/><path class="rv-ah4_ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:volume-up"} {...others} />);
}

export default Component;
