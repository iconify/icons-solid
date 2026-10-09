import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw4h6c1fd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hw4h6c1fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:users-20-bold"} {...others} />);
}

export default Component;
