import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy0upab9n.css';
import '../../css/l/lyrgvcbgr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vy0upab9n"/><path class="lyrgvcbgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:reason"} {...others} />);
}

export default Component;
