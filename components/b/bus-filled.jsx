import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovt-8nb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovt-8nb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bus-filled"} {...others} />);
}

export default Component;
