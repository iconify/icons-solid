import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z-hi-2qyy.css';
import '../../css/i/il3_yhf-e.css';
import '../../css/z/zkqbqgb3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="z-hi-2qyy"/><circle class="il3_yhf-e"/><path class="zkqbqgb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bread-machine"} {...others} />);
}

export default Component;
