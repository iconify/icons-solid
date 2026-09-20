import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i339vabyb.css';
import '../../css/g/gtfr4-buh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i339vabyb"/><path class="gtfr4-buh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:drawer-image"} {...others} />);
}

export default Component;
