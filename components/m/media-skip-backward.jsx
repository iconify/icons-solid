import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo8r5ubdl.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="oo8r5ubdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:media-skip-backward"} {...others} />);
}

export default Component;
