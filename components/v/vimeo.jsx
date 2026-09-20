import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neo39kk3j.css';
import '../../css/e/e5z8i_kna.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="neo39kk3j"/><path class="e5z8i_kna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vimeo"} {...others} />);
}

export default Component;
