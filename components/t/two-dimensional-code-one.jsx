import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yaq8wsbts.css';
import '../../css/n/n98ciob7o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="yaq8wsbts"/><path class="n98ciob7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:two-dimensional-code-one"} {...others} />);
}

export default Component;
