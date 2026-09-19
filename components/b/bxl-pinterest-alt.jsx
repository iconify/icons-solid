import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7xpv03_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7xpv03_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-pinterest-alt"} {...others} />);
}

export default Component;
