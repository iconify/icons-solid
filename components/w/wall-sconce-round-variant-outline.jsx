import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwh79xb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwh79xb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wall-sconce-round-variant-outline"} {...others} />);
}

export default Component;
