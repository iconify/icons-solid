import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oabo71bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oabo71bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:gallery-horizontal"} {...others} />);
}

export default Component;
