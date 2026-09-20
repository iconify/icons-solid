import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3o-d3q7e.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="f3o-d3q7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:mic-alt"} {...others} />);
}

export default Component;
