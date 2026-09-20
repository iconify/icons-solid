import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szy26opxx.css';
import '../../css/c/csou2mbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szy26opxx"/><path class="csou2mbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ramp"} {...others} />);
}

export default Component;
