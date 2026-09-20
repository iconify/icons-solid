import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm6dfob2b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xm6dfob2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:travel-motorcycle"} {...others} />);
}

export default Component;
