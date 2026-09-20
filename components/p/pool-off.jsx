import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycu1ysb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycu1ysb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pool-off"} {...others} />);
}

export default Component;
