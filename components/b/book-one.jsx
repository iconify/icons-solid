import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e8k5a4b4i.css';
import '../../css/s/sxk3gr95p.css';
import '../../css/w/wkt54un3o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="e8k5a4b4i"/><path class="sxk3gr95p"/><path class="wkt54un3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:book-one"} {...others} />);
}

export default Component;
