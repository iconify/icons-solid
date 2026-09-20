import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jejrh1gth.css';
import '../../css/v/vym5f4c_s.css';
import '../../css/o/optgq2b0x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jejrh1gth"/><path class="vym5f4c_s"/><path class="optgq2b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pear"} {...others} />);
}

export default Component;
