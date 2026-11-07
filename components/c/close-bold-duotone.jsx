import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch5jc2bad.css';
import '../../css/r/rjuy8dl9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ch5jc2bad"/><path class="rjuy8dl9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:close-bold-duotone"} {...others} />);
}

export default Component;
