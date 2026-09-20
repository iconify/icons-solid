import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4i5z2h2q.css';
import '../../css/c/c4uvzi6dm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="j4i5z2h2q"/><path class="c4uvzi6dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pushover"} {...others} />);
}

export default Component;
