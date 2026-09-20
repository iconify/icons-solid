import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnr7b16vr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="vnr7b16vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:station"} {...others} />);
}

export default Component;
