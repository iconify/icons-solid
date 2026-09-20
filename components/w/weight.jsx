import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em2nqve8q.css';
import '../../css/n/n5k9wlmuu.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="em2nqve8q"/><path class="n5k9wlmuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:weight"} {...others} />);
}

export default Component;
