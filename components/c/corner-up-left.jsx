import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4d7lfbal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4d7lfbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:corner-up-left"} {...others} />);
}

export default Component;
