import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e28o0mlgm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/q2ya84b7g.css';
import '../../css/b/bl4mzjxma.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e28o0mlgm"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="q2ya84b7g"/><path class="bl4mzjxma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keycap-1"} {...others} />);
}

export default Component;
