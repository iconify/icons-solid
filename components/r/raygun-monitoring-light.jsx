import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvqnthbsg.css';
import '../../css/b/bh48ipmmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jvqnthbsg"/><path class="bh48ipmmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raygun-monitoring-light"} {...others} />);
}

export default Component;
