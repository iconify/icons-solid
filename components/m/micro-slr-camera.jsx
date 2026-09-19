import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz9uy7e0i.css';
import '../../css/z/zh9jzvb3q.css';
import '../../css/h/humfpgw5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uz9uy7e0i"/><path class="zh9jzvb3q"/><path class="humfpgw5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:micro-slr-camera"} {...others} />);
}

export default Component;
