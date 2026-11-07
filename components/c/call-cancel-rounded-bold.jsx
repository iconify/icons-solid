import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-r_0lb5z.css';
import '../../css/c/cfzav0mxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-r_0lb5z"/><path class="cfzav0mxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-cancel-rounded-bold"} {...others} />);
}

export default Component;
