import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj_8ap30u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nj_8ap30u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:footprint-line"} {...others} />);
}

export default Component;
