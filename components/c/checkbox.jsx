import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f324_hb1n.css';
import '../../css/e/edm1wthdh.css';

const viewBox = {"width":44,"height":44};
const content = `<rect class="f324_hb1n"/><path class="edm1wthdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:checkbox"} {...others} />);
}

export default Component;
