import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xskbo8bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xskbo8bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:signpost-duo-1"} {...others} />);
}

export default Component;
