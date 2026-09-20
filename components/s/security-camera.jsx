import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq3_rzi9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jq3_rzi9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:security-camera"} {...others} />);
}

export default Component;
