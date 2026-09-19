import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iic6q4bie.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iic6q4bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:battery-empty"} {...others} />);
}

export default Component;
