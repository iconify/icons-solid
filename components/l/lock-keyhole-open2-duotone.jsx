import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdrc_0b-w.css';
import '../../css/w/wzbfabcva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sdrc_0b-w"/><path class="wzbfabcva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-keyhole-open2-duotone"} {...others} />);
}

export default Component;
