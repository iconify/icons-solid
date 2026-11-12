import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atz-97bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atz-97bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:outdoor-motion"} {...others} />);
}

export default Component;
