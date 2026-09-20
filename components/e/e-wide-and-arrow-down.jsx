import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-vfj0b9p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b-vfj0b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:e-wide-and-arrow-down"} {...others} />);
}

export default Component;
