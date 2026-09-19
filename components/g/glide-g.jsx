import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujlvo7bfi.css';

const viewBox = {"width":1472,"height":1792};
const content = `<path class="ujlvo7bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:glide-g"} {...others} />);
}

export default Component;
