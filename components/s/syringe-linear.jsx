import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lllc-r1nz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lllc-r1nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:syringe-linear"} {...others} />);
}

export default Component;
