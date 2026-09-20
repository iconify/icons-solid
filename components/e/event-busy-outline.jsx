import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbxbsj5py.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbxbsj5py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:event-busy-outline"} {...others} />);
}

export default Component;
