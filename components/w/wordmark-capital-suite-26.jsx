import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu29ecc4k.css';

const viewBox = {"width":52,"height":26};
const content = `<path class="nu29ecc4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wordmark-capital-suite-26"} {...others} />);
}

export default Component;
