import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7pxlvmcd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n7pxlvmcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:view-split-16-solid"} {...others} />);
}

export default Component;
