import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxpbg7b-b.css';
import '../../css/k/k4l1xjb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kxpbg7b-b"/><path class="k4l1xjb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screen-share-bold"} {...others} />);
}

export default Component;
