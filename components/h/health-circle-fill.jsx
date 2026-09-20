import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-bbp7lwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-bbp7lwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:health-circle-fill"} {...others} />);
}

export default Component;
