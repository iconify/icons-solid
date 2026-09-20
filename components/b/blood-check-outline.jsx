import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdv9-dbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdv9-dbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:blood-check-outline"} {...others} />);
}

export default Component;
