import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etfx2dbzc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="etfx2dbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-tall-rectangles-up"} {...others} />);
}

export default Component;
