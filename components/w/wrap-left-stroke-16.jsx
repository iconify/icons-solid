import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_b-7fbbp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o_b-7fbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wrap-left-stroke-16"} {...others} />);
}

export default Component;
