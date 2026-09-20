import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi2gxlb-t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zi2gxlb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-right-to-tall-rectangle-outline"} {...others} />);
}

export default Component;
