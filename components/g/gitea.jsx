import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikxd3jb2y.css';
import '../../css/b/b3ex35ova.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ikxd3jb2y"/><path class="b3ex35ova"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitea"} {...others} />);
}

export default Component;
