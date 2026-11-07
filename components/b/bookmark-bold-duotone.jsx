import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts-sbuimt.css';
import '../../css/k/kxlp5qvgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts-sbuimt"/><path class="kxlp5qvgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-bold-duotone"} {...others} />);
}

export default Component;
