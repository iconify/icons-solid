import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q09r_w8dz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q09r_w8dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:headset-help"} {...others} />);
}

export default Component;
