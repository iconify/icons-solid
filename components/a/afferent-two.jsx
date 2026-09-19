import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/y/y2dgydb7o.css';
import '../../css/a/a2im80b3m.css';
import '../../css/g/gj5isf39e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="y2dgydb7o"/><path class="a2im80b3m"/><path class="gj5isf39e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:afferent-two"} {...others} />);
}

export default Component;
