import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg6q7_b9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kg6q7_b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-full-filled"} {...others} />);
}

export default Component;
