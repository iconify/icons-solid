import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlbf1yb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rlbf1yb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:payload-cms"} {...others} />);
}

export default Component;
