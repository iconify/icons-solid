import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l99r3d5dl.css';
import '../../css/a/a4x7enbjd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l99r3d5dl"/><path class="a4x7enbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-book"} {...others} />);
}

export default Component;
