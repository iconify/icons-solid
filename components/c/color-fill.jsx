import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz8i1bs_o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iz8i1bs_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:color-fill"} {...others} />);
}

export default Component;
