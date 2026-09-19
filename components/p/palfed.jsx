import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/img8e6bfv.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="img8e6bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:palfed"} {...others} />);
}

export default Component;
