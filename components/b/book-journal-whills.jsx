import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajnikkn8w.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ajnikkn8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:book-journal-whills"} {...others} />);
}

export default Component;
