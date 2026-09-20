import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcqr4nb2y.css';
import '../../css/a/aruuerbat.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zcqr4nb2y"/><path class="aruuerbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:headlamp"} {...others} />);
}

export default Component;
