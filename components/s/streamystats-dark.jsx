import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms5fjbcnx.css';
import '../../css/c/c8oz1ac5e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ms5fjbcnx"/><path class="c8oz1ac5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats-dark"} {...others} />);
}

export default Component;
