import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dux_1z-1z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dux_1z-1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:wifi"} {...others} />);
}

export default Component;
