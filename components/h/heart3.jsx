import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erora1bam.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="erora1bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart3"} {...others} />);
}

export default Component;
