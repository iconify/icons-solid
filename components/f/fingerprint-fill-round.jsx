import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo-3fcnkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vo-3fcnkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fingerprint-fill-round"} {...others} />);
}

export default Component;
