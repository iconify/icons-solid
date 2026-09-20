import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buk670bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="buk670bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-down-right-filled"} {...others} />);
}

export default Component;
