import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq6hxe9kr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sq6hxe9kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:keenetic"} {...others} />);
}

export default Component;
