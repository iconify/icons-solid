import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo_f7bvn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lmo_f7bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:crystal-wordmark"} {...others} />);
}

export default Component;
