import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw_8thb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vw_8thb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:oven-mitts2"} {...others} />);
}

export default Component;
