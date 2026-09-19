import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygj31lgsv.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="ygj31lgsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-triangle-up"} {...others} />);
}

export default Component;
