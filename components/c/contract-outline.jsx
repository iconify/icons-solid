import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gte1b_zmg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gte1b_zmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:contract-outline"} {...others} />);
}

export default Component;
