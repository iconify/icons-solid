import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snypjj0it.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snypjj0it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-image-location-outline"} {...others} />);
}

export default Component;
