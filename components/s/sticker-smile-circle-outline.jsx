import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/annqv0bpq.css';
import '../../css/m/myp8yacpy.css';
import '../../css/x/xmx92ictg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="annqv0bpq"/><path class="myp8yacpy"/><path clip-rule="evenodd" class="xmx92ictg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-outline"} {...others} />);
}

export default Component;
