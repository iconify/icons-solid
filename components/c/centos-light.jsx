import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-brn9h0g.css';
import '../../css/q/q7y6lrbrc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x-brn9h0g"/><path class="q7y6lrbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:centos-light"} {...others} />);
}

export default Component;
