import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn9_2bcqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn9_2bcqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:yelp"} {...others} />);
}

export default Component;
