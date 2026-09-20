import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfhu18_2w.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="dfhu18_2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bell-f"} {...others} />);
}

export default Component;
