import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6k5uxbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6k5uxbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:signal-cellular-2"} {...others} />);
}

export default Component;
