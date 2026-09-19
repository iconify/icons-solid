import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkd9v1vyo.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="mkd9v1vyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:mobile-button"} {...others} />);
}

export default Component;
