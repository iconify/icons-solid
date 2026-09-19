import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re_-x7b3h.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="re_-x7b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:gem"} {...others} />);
}

export default Component;
