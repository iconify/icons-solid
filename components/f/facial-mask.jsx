import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nde60ab7m.css';
import '../../css/e/ez_zj8b4g.css';
import '../../css/a/arg04jbjn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nde60ab7m"/><path class="ez_zj8b4g"/><path class="arg04jbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:facial-mask"} {...others} />);
}

export default Component;
