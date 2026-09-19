import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu7p_-bky.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hu7p_-bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:spinner"} {...others} />);
}

export default Component;
