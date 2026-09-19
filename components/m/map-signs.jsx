import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p84lp4bfz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p84lp4bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:map-signs"} {...others} />);
}

export default Component;
