import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgxy0pbeo.css';
import '../../css/h/hls8t4ywn.css';
import '../../css/v/vilmiwzmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgxy0pbeo"/><path class="hls8t4ywn"/><path class="vilmiwzmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-basket-rating"} {...others} />);
}

export default Component;
