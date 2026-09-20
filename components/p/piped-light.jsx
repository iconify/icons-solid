import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f88f6cb-x.css';
import '../../css/a/a2th6qhaq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f88f6cb-x"/><path class="a2th6qhaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piped-light"} {...others} />);
}

export default Component;
