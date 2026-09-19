import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf7x3vv8c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vf7x3vv8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hexagon-half"} {...others} />);
}

export default Component;
