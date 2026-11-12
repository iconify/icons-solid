import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0jsy2bsu.css';
import '../../css/t/t3y7hc53e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0jsy2bsu"/><path class="t3y7hc53e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pequeroku"} {...others} />);
}

export default Component;
