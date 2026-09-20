import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3to5ubug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3to5ubug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:address-marker-outline"} {...others} />);
}

export default Component;
