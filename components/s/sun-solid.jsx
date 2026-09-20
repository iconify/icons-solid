import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1-7subbo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k1-7subbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sun-solid"} {...others} />);
}

export default Component;
