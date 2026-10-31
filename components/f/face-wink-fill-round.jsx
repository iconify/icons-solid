import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxf3dbcsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxf3dbcsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:face-wink-fill-round"} {...others} />);
}

export default Component;
