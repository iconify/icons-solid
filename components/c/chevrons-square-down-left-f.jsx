import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usqlc6b5l.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="usqlc6b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevrons-square-down-left-f"} {...others} />);
}

export default Component;
