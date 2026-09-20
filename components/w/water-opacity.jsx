import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy5egbc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oy5egbc5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:water-opacity"} {...others} />);
}

export default Component;
