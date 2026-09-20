import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0fw8pbdn.css';
import '../../css/r/rkj0d4ldk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0fw8pbdn"/><path class="rkj0d4ldk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:save"} {...others} />);
}

export default Component;
