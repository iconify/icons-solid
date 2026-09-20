import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr9w-81wj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr9w-81wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:linux-professional-institute"} {...others} />);
}

export default Component;
