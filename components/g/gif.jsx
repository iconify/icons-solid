import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s75lp1bfi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s75lp1bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:gif"} {...others} />);
}

export default Component;
