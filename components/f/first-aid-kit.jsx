import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i4uadmb9d.css';
import '../../css/g/gg74-wb0r.css';
import '../../css/i/ixrulac1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="i4uadmb9d"/><path class="gg74-wb0r"/><path class="ixrulac1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:first-aid-kit"} {...others} />);
}

export default Component;
