import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx-xs2vof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx-xs2vof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:planet-round"} {...others} />);
}

export default Component;
