import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx4y6cc8o.css';

const viewBox = {"width":16,"height":17};
const content = `<path class="qx4y6cc8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:upwards-arrow-to-bar"} {...others} />);
}

export default Component;
