import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7qzbly7r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f7qzbly7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:heart"} {...others} />);
}

export default Component;
