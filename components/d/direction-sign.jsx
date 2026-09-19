import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsszjbc5q.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="xsszjbc5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:direction-sign"} {...others} />);
}

export default Component;
