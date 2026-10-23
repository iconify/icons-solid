import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmdt1p3iv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmdt1p3iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:globe-code"} {...others} />);
}

export default Component;
