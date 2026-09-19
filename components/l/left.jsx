import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdpaesb5u.css';
import '../../css/r/rr_70iyii.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qdpaesb5u"/><path class="rr_70iyii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:left"} {...others} />);
}

export default Component;
