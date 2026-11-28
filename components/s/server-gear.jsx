import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmwb7_bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmwb7_bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:server-gear"} {...others} />);
}

export default Component;
