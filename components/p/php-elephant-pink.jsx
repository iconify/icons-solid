import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ccb2w-q.css';
import '../../css/t/toaf3ebik.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o1ccb2w-q"/><path class="toaf3ebik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:php-elephant-pink"} {...others} />);
}

export default Component;
