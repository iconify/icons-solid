import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfu_5sb2s.css';
import '../../css/z/zu9il-bqu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfu_5sb2s"/><path class="zu9il-bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:graduate-cap-fill-20"} {...others} />);
}

export default Component;
