import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lffg11dkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lffg11dkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:ceiling-lamp"} {...others} />);
}

export default Component;
