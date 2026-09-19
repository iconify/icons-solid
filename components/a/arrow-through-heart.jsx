import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq34fv2ns.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oq34fv2ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-through-heart"} {...others} />);
}

export default Component;
