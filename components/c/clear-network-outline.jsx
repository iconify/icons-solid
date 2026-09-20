import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9fcpjbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9fcpjbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clear-network-outline"} {...others} />);
}

export default Component;
