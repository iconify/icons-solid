import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfv7x8bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfv7x8bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:package-variant-minus"} {...others} />);
}

export default Component;
