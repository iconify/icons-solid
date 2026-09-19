import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e96me-bvt.css';
import '../../css/p/p9gt7sb5i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="e96me-bvt"/><path class="p9gt7sb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:write"} {...others} />);
}

export default Component;
