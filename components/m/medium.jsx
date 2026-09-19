import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj0wl3bpu.css';

const viewBox = {"width":16,"height":12};
const content = `<path class="bj0wl3bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:medium"} {...others} />);
}

export default Component;
