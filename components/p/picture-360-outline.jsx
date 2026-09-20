import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no--2obox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="no--2obox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:picture-360-outline"} {...others} />);
}

export default Component;
