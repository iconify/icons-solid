import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmwu8mbdg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dmwu8mbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-to-payment-card-in-slot"} {...others} />);
}

export default Component;
