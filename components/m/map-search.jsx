import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wdkj3dj0e.css';
import '../../css/d/d1_-z3bdd.css';
import '../../css/c/c-cg5rb1w.css';
import '../../css/e/eeqpmubbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wdkj3dj0e"/><path class="d1_-z3bdd"/><path class="c-cg5rb1w"/><path class="eeqpmubbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:map-search"} {...others} />);
}

export default Component;
