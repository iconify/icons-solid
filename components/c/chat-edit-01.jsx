import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4xvteg8u.css';
import '../../css/d/d5x0q1xds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m4xvteg8u"/><path class="d5x0q1xds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-edit-01"} {...others} />);
}

export default Component;
