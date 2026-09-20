import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npblpyoji.css';
import '../../css/j/jm3xaac9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="npblpyoji"/><path class="jm3xaac9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:whatsapp"} {...others} />);
}

export default Component;
