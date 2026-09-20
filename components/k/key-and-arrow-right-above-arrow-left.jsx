import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdo_mb58d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zdo_mb58d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:key-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
