import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlfhhrbks.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="hlfhhrbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevrons-square-down-left"} {...others} />);
}

export default Component;
