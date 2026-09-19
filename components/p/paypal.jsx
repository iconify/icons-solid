import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fezhcwz_j.css';

const viewBox = {"width":456,"height":488};
const content = `<path class="fezhcwz_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:paypal"} {...others} />);
}

export default Component;
