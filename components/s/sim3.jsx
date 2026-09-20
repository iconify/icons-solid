import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw0kxo5rm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gw0kxo5rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sim3"} {...others} />);
}

export default Component;
