import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coapld2vp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coapld2vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:folder"} {...others} />);
}

export default Component;
