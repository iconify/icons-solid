import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0t_jjb1o.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="r0t_jjb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-africa-outline"} {...others} />);
}

export default Component;
