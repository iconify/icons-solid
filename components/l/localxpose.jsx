import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/see3_bcxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="see3_bcxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:localxpose"} {...others} />);
}

export default Component;
