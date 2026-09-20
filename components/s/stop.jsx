import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb7sowwzt.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};
const content = `<path class="tb7sowwzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:stop"} {...others} />);
}

export default Component;
