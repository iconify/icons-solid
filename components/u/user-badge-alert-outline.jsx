import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lccrvp42b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lccrvp42b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:user-badge-alert-outline"} {...others} />);
}

export default Component;
