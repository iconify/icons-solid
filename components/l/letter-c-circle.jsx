import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt1j3xb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt1j3xb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:letter-c-circle"} {...others} />);
}

export default Component;
