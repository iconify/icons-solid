import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_lhe9xti.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="b_lhe9xti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:tint"} {...others} />);
}

export default Component;
