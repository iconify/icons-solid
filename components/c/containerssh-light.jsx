import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkvjprb7w.css';
import '../../css/w/w4yohibkr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vkvjprb7w"/><path class="w4yohibkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:containerssh-light"} {...others} />);
}

export default Component;
