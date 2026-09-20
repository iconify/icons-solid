import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxftx6b1l.css';
import '../../css/n/ncu40jb7n.css';
import '../../css/m/m6donjb3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fxftx6b1l"/><path class="ncu40jb7n"/><path class="m6donjb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:the-verge"} {...others} />);
}

export default Component;
