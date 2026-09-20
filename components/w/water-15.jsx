import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svgx0q8ik.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="svgx0q8ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:water-15"} {...others} />);
}

export default Component;
