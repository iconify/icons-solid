import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uj507xj1f.css';
import '../../css/l/lhllv9bxt.css';
import '../../css/d/dgn0rl2ke.css';
import '../../css/r/rdjwzdbya.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="uj507xj1f"/><path class="lhllv9bxt"/><path class="dgn0rl2ke"/><path class="rdjwzdbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pyramid-one"} {...others} />);
}

export default Component;
