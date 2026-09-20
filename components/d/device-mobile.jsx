import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftz8nnb_a.css';

const viewBox = {"width":10,"height":16};
const content = `<path class="ftz8nnb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:device-mobile"} {...others} />);
}

export default Component;
