import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t39s4jb2d.css';
import '../../css/z/zcykc_bah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t39s4jb2d"/><path class="zcykc_bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buy-me-a-coffee"} {...others} />);
}

export default Component;
