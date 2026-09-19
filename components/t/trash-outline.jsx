import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gowarsb4c.css';
import '../../css/b/b0c14i84a.css';
import '../../css/f/fyztchb2n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gowarsb4c"/><path class="b0c14i84a"/><path class="fyztchb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trash-outline"} {...others} />);
}

export default Component;
