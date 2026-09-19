import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zl1fhm3-r.css';
import '../../css/x/xkr8jvbze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zl1fhm3-r"/><path class="xkr8jvbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:high-light"} {...others} />);
}

export default Component;
