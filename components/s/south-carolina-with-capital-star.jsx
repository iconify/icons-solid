import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_h4-1b1d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t_h4-1b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:south-carolina-with-capital-star"} {...others} />);
}

export default Component;
