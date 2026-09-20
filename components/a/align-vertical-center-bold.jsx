import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2gy-yl-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2gy-yl-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-center-bold"} {...others} />);
}

export default Component;
