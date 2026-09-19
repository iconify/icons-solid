import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj2cj9b5h.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="jj2cj9b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grip-lines-vertical"} {...others} />);
}

export default Component;
