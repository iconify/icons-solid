import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejl9gt84u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ejl9gt84u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:programming-modules"} {...others} />);
}

export default Component;
