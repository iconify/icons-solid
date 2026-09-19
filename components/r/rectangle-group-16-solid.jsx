import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as8c1x0lp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="as8c1x0lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:rectangle-group-16-solid"} {...others} />);
}

export default Component;
