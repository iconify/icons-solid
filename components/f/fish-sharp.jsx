import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe4b7xbxm.css';
import '../../css/n/ncwehzbfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fe4b7xbxm"/><path class="ncwehzbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:fish-sharp"} {...others} />);
}

export default Component;
