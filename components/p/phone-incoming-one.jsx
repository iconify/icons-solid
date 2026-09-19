import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ewvk809ug.css';
import '../../css/x/x57m2cc2n.css';
import '../../css/r/rknh_wb4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ewvk809ug"/><path class="x57m2cc2n"/><path class="rknh_wb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-incoming-one"} {...others} />);
}

export default Component;
