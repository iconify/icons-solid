import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6-sa7uud.css';
import '../../css/a/a_ygf-j1c.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="m6-sa7uud"/><path class="a_ygf-j1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:lightning-cable-solid"} {...others} />);
}

export default Component;
