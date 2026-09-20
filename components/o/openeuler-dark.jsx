import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzd74tzyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hzd74tzyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openeuler-dark"} {...others} />);
}

export default Component;
