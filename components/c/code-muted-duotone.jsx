import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq_v0_2ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq_v0_2ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:code-muted-duotone"} {...others} />);
}

export default Component;
