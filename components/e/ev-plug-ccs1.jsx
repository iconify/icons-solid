import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe_j1ac2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fe_j1ac2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ev-plug-ccs1"} {...others} />);
}

export default Component;
