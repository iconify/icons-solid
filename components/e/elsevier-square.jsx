import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x37jg-vpa.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="x37jg-vpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:elsevier-square"} {...others} />);
}

export default Component;
