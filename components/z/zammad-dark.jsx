import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfq4j0kqj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wfq4j0kqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zammad-dark"} {...others} />);
}

export default Component;
