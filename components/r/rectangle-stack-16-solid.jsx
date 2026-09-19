import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhu4i3sbi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bhu4i3sbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:rectangle-stack-16-solid"} {...others} />);
}

export default Component;
