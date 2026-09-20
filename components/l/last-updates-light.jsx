import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmme1dbbu.css';
import '../../css/z/zju01gbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmme1dbbu"/><path class="zju01gbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:last-updates-light"} {...others} />);
}

export default Component;
