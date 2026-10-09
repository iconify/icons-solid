import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-kx1bbug.css';
import '../../css/s/s-tqsqm8s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u-kx1bbug"/><path class="s-tqsqm8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowboard-20"} {...others} />);
}

export default Component;
