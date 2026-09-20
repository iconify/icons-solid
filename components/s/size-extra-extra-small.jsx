import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p22l6fwcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p22l6fwcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:size-extra-extra-small"} {...others} />);
}

export default Component;
