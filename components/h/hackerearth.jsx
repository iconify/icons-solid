import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2z_a4ykj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2z_a4ykj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hackerearth"} {...others} />);
}

export default Component;
