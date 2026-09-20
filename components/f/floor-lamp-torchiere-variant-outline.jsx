import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcd1rsl6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcd1rsl6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:floor-lamp-torchiere-variant-outline"} {...others} />);
}

export default Component;
