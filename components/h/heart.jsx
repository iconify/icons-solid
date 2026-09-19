import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0scw1b5t.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="x0scw1b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:heart"} {...others} />);
}

export default Component;
