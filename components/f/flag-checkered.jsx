import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boow2abii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="boow2abii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flag-checkered"} {...others} />);
}

export default Component;
