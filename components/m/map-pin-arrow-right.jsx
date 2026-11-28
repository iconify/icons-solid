import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rebh1z_zd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rebh1z_zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:map-pin-arrow-right"} {...others} />);
}

export default Component;
