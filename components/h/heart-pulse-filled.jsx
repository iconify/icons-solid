import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr36w-16i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mr36w-16i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-pulse-filled"} {...others} />);
}

export default Component;
