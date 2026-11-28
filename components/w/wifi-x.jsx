import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuchlbb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuchlbb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:wifi-x"} {...others} />);
}

export default Component;
