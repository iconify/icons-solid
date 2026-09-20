import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uerrwcbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uerrwcbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:quote-single-end-sharp"} {...others} />);
}

export default Component;
