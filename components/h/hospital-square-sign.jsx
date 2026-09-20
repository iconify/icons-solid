import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i03bjx0du.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i03bjx0du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:hospital-square-sign"} {...others} />);
}

export default Component;
