import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/p/p3qnucb9w.css';
import '../../css/y/y_awv3s8j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="p3qnucb9w"/><path class="y_awv3s8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-search-one"} {...others} />);
}

export default Component;
