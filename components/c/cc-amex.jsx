import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhnivs28x.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="mhnivs28x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc-amex"} {...others} />);
}

export default Component;
