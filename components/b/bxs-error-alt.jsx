import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd3z_nbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wd3z_nbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-error-alt"} {...others} />);
}

export default Component;
