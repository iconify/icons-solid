import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9d33dyrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9d33dyrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:invoice-text-arrow-left-outline"} {...others} />);
}

export default Component;
