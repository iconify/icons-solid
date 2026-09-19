import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe-7uybqg.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="oe-7uybqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:adjustment-vertical"} {...others} />);
}

export default Component;
