import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvtwf7mtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvtwf7mtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bookmark-off"} {...others} />);
}

export default Component;
