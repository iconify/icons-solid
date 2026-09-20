import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itbu9wb9k.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="itbu9wb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:battery-three-quarters-f"} {...others} />);
}

export default Component;
