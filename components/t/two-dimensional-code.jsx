import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/v1mw2qb1t.css';
import '../../css/j/j8v342ebz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="v1mw2qb1t"/><path class="j8v342ebz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-dimensional-code"} {...others} />);
}

export default Component;
