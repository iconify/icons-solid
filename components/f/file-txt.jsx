import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jif-fcboa.css';
import '../../css/e/e-oh7bbgy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="jif-fcboa"/><path class="e-oh7bbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-txt"} {...others} />);
}

export default Component;
