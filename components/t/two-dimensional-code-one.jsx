import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/skq3n9b_j.css';
import '../../css/n/n98ciob7o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="skq3n9b_j"/><path class="n98ciob7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-dimensional-code-one"} {...others} />);
}

export default Component;
