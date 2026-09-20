import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3l7u6zwk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e3l7u6zwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ombi-dark"} {...others} />);
}

export default Component;
