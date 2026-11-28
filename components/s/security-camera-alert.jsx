import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esmp9hbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esmp9hbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:security-camera-alert"} {...others} />);
}

export default Component;
