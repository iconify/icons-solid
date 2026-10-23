import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue6qx8t1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue6qx8t1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:wifi-low"} {...others} />);
}

export default Component;
