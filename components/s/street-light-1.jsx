import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eannamb2g.css';
import '../../css/t/tbbt23btd.css';
import '../../css/a/aqlyi4lfh.css';
import '../../css/w/w851-hbmg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="eannamb2g"/><path class="tbbt23btd"/><path class="aqlyi4lfh"/><path class="w851-hbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:street-light-1"} {...others} />);
}

export default Component;
