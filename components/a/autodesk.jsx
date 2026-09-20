import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssd_2ibyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssd_2ibyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:autodesk"} {...others} />);
}

export default Component;
