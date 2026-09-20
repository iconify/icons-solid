import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjwc3fslb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gjwc3fslb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:microsoftsqlserver"} {...others} />);
}

export default Component;
