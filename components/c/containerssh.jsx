import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpptukm0u.css';
import '../../css/b/bkvywwbqo.css';
import '../../css/y/ypxrjb7gy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qpptukm0u"/><path class="bkvywwbqo"/><path class="ypxrjb7gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:containerssh"} {...others} />);
}

export default Component;
