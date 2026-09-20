import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu7x4t4ss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pu7x4t4ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:filter-discount"} {...others} />);
}

export default Component;
