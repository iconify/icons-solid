import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8htw_vfp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n8htw_vfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-up-on-square-16-solid"} {...others} />);
}

export default Component;
