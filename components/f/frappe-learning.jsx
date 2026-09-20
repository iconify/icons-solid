import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce1v0cccs.css';
import '../../css/x/xnqtkuy1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ce1v0cccs"/><path class="xnqtkuy1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-learning"} {...others} />);
}

export default Component;
