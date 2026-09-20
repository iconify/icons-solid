import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shd6ibcoy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="shd6ibcoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:focus-field-vertical"} {...others} />);
}

export default Component;
