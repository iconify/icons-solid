import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u4lm23blg.css';
import '../../css/b/b0ef3ebmi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="u4lm23blg"/><path class="b0ef3ebmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ranking-list"} {...others} />);
}

export default Component;
