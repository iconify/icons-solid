import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3fg7597e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3fg7597e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:moving-desk"} {...others} />);
}

export default Component;
