import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvw4z98pg.css';
import '../../css/l/luchnh4nb.css';
import '../../css/p/p0dnb-b-i.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="wvw4z98pg"/><circle class="luchnh4nb"/><path class="p0dnb-b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:image-outline"} {...others} />);
}

export default Component;
