import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w95g0dfgy.css';

const viewBox = {"width":472,"height":488};
const content = `<path class="w95g0dfgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:spotify"} {...others} />);
}

export default Component;
